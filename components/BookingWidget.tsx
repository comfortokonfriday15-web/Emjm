import React, { useState } from 'react';

const BookingWidget: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleCheckAvailability = () => {
    const message = `Hello, I would like to check availability for ${guests} guest(s) from ${checkIn} to ${checkOut}.`;
    const url = `https://wa.me/2348182222444?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 -mt-16 relative z-30 max-w-5xl mx-auto border-t-4 border-gold">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border-gray-300 border-b-2 focus:border-gold outline-none py-2 text-gray-700 bg-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border-gray-300 border-b-2 focus:border-gold outline-none py-2 text-gray-700 bg-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full border-gray-300 border-b-2 focus:border-gold outline-none py-2 text-gray-700 bg-transparent"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </div>
        <button
          onClick={handleCheckAvailability}
          className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider text-sm h-[46px]"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;