import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from "@/components/ui/use-toast";

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  visitorType: 'local' | 'tourist';
  participants: number;
  preferredDate: string;
  timeSlot: string;
}

const AVAILABLE_DATES = [
  '2024-02-25', '2024-02-26', '2024-02-27',
  '2024-04-01', '2024-04-02', '2024-04-03', '2024-04-04',
  '2024-04-05', '2024-04-06', '2024-04-07'
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00'
];

const isDateAvailable = (date: string) => AVAILABLE_DATES.includes(date);

const Booking = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    visitorType: 'local',
    participants: 1,
    preferredDate: '',
    timeSlot: '',
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('bookings')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          visitor_type: formData.visitorType,
          participants: formData.participants,
          preferred_date: formData.preferredDate,
          time_slot: formData.timeSlot,
          total_amount: calculateTotal()
        }]);

      if (error) throw error;

      toast({
        title: "Booking Submitted",
        description: "Thank you for your booking request! We will get back to you within 12 hours at info@holocenefilms.xyz."
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        visitorType: 'local',
        participants: 1,
        preferredDate: '',
        timeSlot: ''
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive"
      });
      console.error('Error:', error);
    }
  };

  const calculateTotal = () => {
    const rate = formData.visitorType === 'local' ? 250 : 500;
    return rate * formData.participants;
  };

  return (
    <div className="min-h-screen bg-earth/5 py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center mb-12">
          <a href="/" className="inline-flex items-center text-earth hover:text-earth/80 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Home
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-4 text-center">
          Book Your Indigenous Herbal Walk
        </h1>
        <p className="text-center text-earth/80 mb-12">Groups of 5 to 10 people are welcome</p>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-earth mb-4">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-earth/20 rounded-xl">
                <h3 className="text-lg font-bold text-earth mb-2">Local Rate</h3>
                <p className="text-3xl font-bold text-earth">R250</p>
                <p className="text-earth/60">per person</p>
              </div>
              <div className="p-4 border border-earth/20 rounded-xl">
                <h3 className="text-lg font-bold text-earth mb-2">Tourist Rate</h3>
                <p className="text-3xl font-bold text-earth">R500</p>
                <p className="text-earth/60">per person</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-earth font-medium mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="w-full px-4 py-2 rounded-lg border border-earth/20 focus:outline-none focus:ring-2 focus:ring-earth/50"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-earth font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-earth/20 focus:outline-none focus:ring-2 focus:ring-earth/50"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-earth font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 rounded-lg border border-earth/20 focus:outline-none focus:ring-2 focus:ring-earth/50"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-earth font-medium mb-2" htmlFor="visitorType">
                Visitor Type
              </label>
              <select
                id="visitorType"
                required
                className="w-full px-4 py-2 rounded-lg border border-earth/20 focus:outline-none focus:ring-2 focus:ring-earth/50"
                value={formData.visitorType}
                onChange={(e) => setFormData({ ...formData, visitorType: e.target.value as 'local' | 'tourist' })}
              >
                <option value="local">Local</option>
                <option value="tourist">Tourist</option>
              </select>
            </div>

            <div>
              <label className="block text-earth font-medium mb-2" htmlFor="participants">
                Number of Participants
              </label>
              <select
                id="participants"
                required
                className="w-full px-4 py-2 rounded-lg border border-earth/20 focus:outline-none focus:ring-2 focus:ring-earth/50"
                value={formData.participants}
                onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-earth font-medium mb-2" htmlFor="preferredDate">
                Preferred Date
              </label>
              <select
                id="preferredDate"
                required
                className="w-full px-4 py-2 rounded-lg border border-earth/20 focus:outline-none focus:ring-2 focus:ring-earth/50"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value, timeSlot: '' })}
              >
                <option value="">Select a date</option>
                {AVAILABLE_DATES.map(date => (
                  <option key={date} value={date}>
                    {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-earth font-medium mb-2" htmlFor="timeSlot">
                Time Slot
              </label>
              <select
                id="timeSlot"
                required
                disabled={!formData.preferredDate}
                className="w-full px-4 py-2 rounded-lg border border-earth/20 focus:outline-none focus:ring-2 focus:ring-earth/50 disabled:opacity-50"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              >
                <option value="">Select a time slot</option>
                {TIME_SLOTS.map(slot => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="border-t border-earth/20 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-earth font-medium">Total Amount:</span>
                <span className="text-2xl font-bold text-earth">R{calculateTotal()}</span>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-earth text-white rounded-full hover:bg-earth/90 transition-colors font-medium"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;