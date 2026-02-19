import React from 'react';
import { Wifi, Car, Shield, Wind, Users, Bell, Shirt, Plane } from 'lucide-react';

const Amenities: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream pb-20">
      <div className="bg-brown-dark py-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">Amenities & Services</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Everything you need for a comfortable, memorable stay in Uyo.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        
        {/* Featured: Lounge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1572116469696-9a22f2133405?auto=format&fit=crop&w=800&q=80" 
              alt="EEMJM Lounge" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-bold text-brown-dark mb-4">EEMJM LOUNGE</h2>
            <div className="inline-block bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4">OPEN 24 HOURS</div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our on-site bar and lounge is open 24 hours a day, serving a variety of beverages and light refreshments. With a 4.0 rating from guests, it's the perfect spot to unwind after a long day or network with colleagues.
            </p>
          </div>
        </div>

        {/* Featured: Pool */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brown-dark mb-4">Outdoor Swimming Pool</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Take a refreshing dip in our outdoor swimming pool. Surrounded by comfortable loungers, it's the ideal place to relax under the Uyo sun or enjoy a cool evening swim.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80" 
              alt="Swimming Pool" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]" 
            />
          </div>
        </div>

        {/* Additional Amenities Grid */}
        <div className="pt-10">
          <h2 className="text-3xl font-serif font-bold text-center text-brown-dark mb-12">More Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AmenityItem icon={<Wifi />} title="Free High-Speed WiFi" desc="Available throughout the property" />
            <AmenityItem icon={<Car />} title="Free Private Parking" desc="On-site parking at no extra cost" />
            <AmenityItem icon={<Shield />} title="24/7 Security" desc="Your safety is our priority" />
            <AmenityItem icon={<Wind />} title="Air Conditioning" desc="All rooms fully air-conditioned" />
            <AmenityItem icon={<Users />} title="Conference Facilities" desc="Available for business events" />
            <AmenityItem icon={<Bell />} title="Room Service" desc="Available during operating hours" />
            <AmenityItem icon={<Shirt />} title="Laundry Service" desc="Quick and reliable" />
            <AmenityItem icon={<Plane />} title="Airport Transfers" desc="Available on request" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AmenityItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow border-t-4 border-gold hover:shadow-lg transition-shadow">
    <div className="text-gold mb-4 bg-cream inline-block p-3 rounded-full">{icon}</div>
    <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

export default Amenities;