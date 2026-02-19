import React from 'react';
import { Wifi, Tv, Coffee, Bath, Check } from 'lucide-react';

const Rooms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-brown-dark py-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">Our Rooms & Suites</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Comfortable, elegant accommodations designed for your perfect stay in Uyo.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-8">
        
        {/* Room 1: Classic */}
        <RoomCard 
          title="Classic Room"
          description="Perfect for solo travelers or couples. Features a comfortable queen-sized bed, modern ensuite bathroom, work desk, and flat-screen TV."
          image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
          amenities={["Queen Bed", "Ensuite Bathroom", "Work Desk", "Flat-screen TV", "Free WiFi"]}
          price={20500}
          competitors={[
            { name: "Expedia", price: 52760 },
            { name: "Hotels.ng", price: 25500 }
          ]}
        />

        {/* Room 2: Deluxe */}
        <RoomCard 
          title="Deluxe Room"
          description="Our Deluxe Rooms offer extra space and upgraded amenities. Perfect for guests seeking additional comfort with a king-sized bed and seating area."
          image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
          amenities={["King Bed", "Seating Area", "Bathtub", "Mini Fridge", "Air Conditioning", "Free WiFi"]}
          price={25500}
          competitors={[
            { name: "Expedia", price: 59540 }
          ]}
        />

        {/* Room 3: Suite */}
        <RoomCard 
          title="Executive Suite"
          description="Our most luxurious accommodation. Spacious suite with separate living area, premium furnishings, and exclusive amenities for the discerning traveler."
          image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
          amenities={["King Bed", "Separate Living Room", "Luxury Bathroom", "Mini Bar", "Complimentary Breakfast"]}
          price="Contact for Special Rates"
          isPremium
        />

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Prices shown are estimates. Contact us for current rates and special offers.</p>
        </div>
      </div>
    </div>
  );
};

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
  amenities: string[];
  price: number | string;
  competitors?: { name: string; price: number }[];
  isPremium?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, image, amenities, price, competitors, isPremium }) => {
  const whatsappLink = `https://wa.me/2348182222444?text=I'd like to book a ${title} at EEMJM Hotels`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 flex flex-col md:flex-row">
      <div className="md:w-2/5 relative">
        <img src={image} alt={title} className="w-full h-full object-cover min-h-[300px]" />
        {isPremium && (
          <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
            Premium Choice
          </div>
        )}
      </div>
      
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-serif font-bold text-gray-800">{title}</h2>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {amenities.map((item, idx) => (
              <span key={idx} className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                <Check size={12} className="mr-1 text-gold" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          {/* Price Comparison Table */}
          {typeof price === 'number' && (
             <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                  <span className="font-bold text-gold-dark flex items-center gap-2">
                    <span className="bg-gold text-white text-[10px] px-1.5 rounded">BEST RATE</span>
                    Book Direct
                  </span>
                  <span className="font-bold text-xl text-gold-dark">₦{price.toLocaleString()}</span>
                </div>
                {competitors?.map((comp, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0 text-sm text-gray-500">
                    <span>{comp.name}</span>
                    <span className="line-through">₦{comp.price.toLocaleString()}</span>
                  </div>
                ))}
             </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {typeof price === 'string' && (
              <div className="text-xl font-bold text-gold mb-2 sm:mb-0 mr-auto">{price}</div>
            )}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center bg-green-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded shadow-md transition-all flex items-center justify-center gap-2"
            >
              Book This Room
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;