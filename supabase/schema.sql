-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE visitor_type AS ENUM ('local', 'tourist');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled');

-- Bookings table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    visitor_type visitor_type NOT NULL,
    participants INTEGER NOT NULL CHECK (participants >= 1 AND participants <= 10),
    preferred_date DATE NOT NULL,
    time_slot TIME NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    booking_status booking_status DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Documentaries table
CREATE TABLE documentaries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    thumbnail_url TEXT,
    video_url TEXT,
    release_date DATE,
    duration INTEGER, -- in minutes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Sacred sites table
CREATE TABLE sacred_sites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Herbs table
CREATE TABLE herbs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    scientific_name TEXT,
    description TEXT NOT NULL,
    uses TEXT[],
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Available dates table
CREATE TABLE available_dates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date DATE NOT NULL,
    time_slot TIME NOT NULL,
    max_participants INTEGER NOT NULL DEFAULT 10,
    current_bookings INTEGER NOT NULL DEFAULT 0,
    is_available BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    UNIQUE(date, time_slot)
);

-- Create indexes
CREATE INDEX idx_bookings_date ON bookings(preferred_date);
CREATE INDEX idx_bookings_email ON bookings(email);
CREATE INDEX idx_documentaries_release_date ON documentaries(release_date);
CREATE INDEX idx_available_dates_date ON available_dates(date);

-- Create trigger function for updating timestamps
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updating timestamps
CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON bookings
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON documentaries
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON sacred_sites
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON herbs
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_timestamp
    BEFORE UPDATE ON available_dates
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

-- Create trigger function for updating available_dates current_bookings
CREATE OR REPLACE FUNCTION trigger_update_available_dates()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE available_dates
        SET current_bookings = current_bookings + NEW.participants
        WHERE date = NEW.preferred_date AND time_slot = NEW.time_slot::TIME;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE available_dates
        SET current_bookings = current_bookings - OLD.participants
        WHERE date = OLD.preferred_date AND time_slot = OLD.time_slot::TIME;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating available_dates
CREATE TRIGGER update_available_dates
    AFTER INSERT OR DELETE ON bookings
    FOR EACH ROW
    EXECUTE FUNCTION trigger_update_available_dates();