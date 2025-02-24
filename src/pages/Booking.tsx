import React from 'react';
import { ChevronLeft } from 'lucide-react';

const Booking = () => {
  return (
    <div className="min-h-screen bg-earth/5 py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center mb-12">
          <a href="/" className="inline-flex items-center text-earth hover:text-earth/80 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
