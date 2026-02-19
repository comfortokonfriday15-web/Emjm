import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, MapPin, Wifi, Car, Utensils, Shield, TentTree as Tree, CheckCircle } from 'lucide-react';
import BookingWidget from '../components/BookingWidget';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gold mb-6 leading-tight drop-shadow-lg">
            WELCOME TO <br/> EEMJM HOTELS
          </h1>
          <p className="text-xl md:text-2xl text-white font-light mb-8 max-w-3xl drop-shadow-md font-serif italic">
            Your Premier 4-Star Retreat in the Heart of Uyo, Akwa Ibom
          </p>
          <p className="text-gray-200 mb-10 max-w-2xl leading-relaxed hidden md:block">
            Experience luxury, comfort and genuine Nigerian hospitality at EEMJM Hotels. Ideally located on Dominic Utuk Avenue, we offer the perfect base for both business and leisure travelers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/2348182222444" 
              className="flex items-center justify-center gap-2 bg-green-whatsapp hover:bg-green-600 text-white px-8 py-4 rounded font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              BOOK NOW ON WHATSAPP
            </a>
            <Link 
              to="/rooms" 
              className="flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              CHECK ROOMS & RATES
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <div className="px-4 mb-16">
        <BookingWidget />
      </div>

      {/* About Sneak Peek */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block border-b-2 border-gold pb-1">
              <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark">Welcome to EEMJM Hotels</h2>
            <div className="flex items-center gap-1 text-gold">
              <Star size={20} fill="#D4AF37" />
              <Star size={20} fill="#D4AF37" />
              <Star size={20} fill="#D4AF37" />
              <Star size={20} fill="#D4AF37" />
              <span className="text-gray-500 text-sm ml-2">(1,300+ Guest Reviews)</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              EEMJM Hotels is a 4-star rated establishment combining modern comfort with authentic Nigerian warmth to create an unforgettable stay experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our property features a swimming pool, free parking, complimentary breakfast, and high-speed WiFi throughout – all designed with your comfort in mind. Whether you're visiting Uyo for business or pleasure, our team is committed to making your stay exceptional.
            </p>
            <div className="pt-4">
              <Link to="/amenities" className="text-brown font-semibold hover:text-gold transition-colors inline-flex items-center gap-2">
                Discover our amenities <span>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80" alt="Pool" className="rounded-lg shadow-md w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80" alt="Restaurant" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80" alt="Room" className="rounded-lg shadow-md w-full h-48 object-cover" />
            <div className="bg-gold/10 rounded-lg flex items-center justify-center h-48 mt-8 border border-gold/20">
              <div className="text-center p-4">
                 <p className="font-serif text-3xl font-bold text-gold-dark mb-1">4.0/5</p>
                 <p className="text-sm text-gray-600">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Amenities */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-4">Why Guests Love Staying With Us</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <AmenityPreview icon={<div className="p-3 rounded-full bg-blue-100 text-blue-600"><Wifi /></div>} title="Free High-Speed WiFi" />
            <AmenityPreview icon={<div className="p-3 rounded-full bg-orange-100 text-orange-600"><Utensils /></div>} title="EEMJM Lounge & Restaurant" />
            <AmenityPreview icon={<div className="p-3 rounded-full bg-cyan-100 text-cyan-600"><div className="w-6 h-6 border-2 border-current rounded-full"></div></div>} title="Outdoor Swimming Pool" />
            <AmenityPreview icon={<div className="p-3 rounded-full bg-gray-200 text-gray-700"><Car /></div>} title="Free Private Parking" />
            <AmenityPreview icon={<div className="p-3 rounded-full bg-red-100 text-red-600"><Shield /></div>} title="24/7 Security" />
            <AmenityPreview icon={<div className="p-3 rounded-full bg-green-100 text-green-600"><Tree /></div>} title="Children's Playground" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-10 text-center">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ReviewCard 
            name="Sarah O." 
            date="Dec 2024"
            text="As you arrive you have a feel that this hotel might be ok... The staff were incredibly welcoming and the room was spotless."
            rating={5}
          />
          <ReviewCard 
            name="Emmanuel K." 
            date="Jan 2025"
            text="Excellent location in Uyo. The lounge is a great place to relax in the evening. Good value for money."
            rating={4}
          />
          <ReviewCard 
            name="Ngozi A." 
            date="Nov 2024"
            text="Comfortable beds and reliable AC. Breakfast was delicious with good local options."
            rating={4}
          />
        </div>
        <div className="text-center mt-10">
          <a href="https://www.google.com/travel/search?q=hotels%20near%20me&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73249150%2C121522131%2C121529349&hl=en-NG&gl=ng&ssta=1&ts=CAESCgoCCAMKAggDEAAaHhIcEhQKBwjqDxACGBISBwjqDxACGBMYATIECAAQACoHCgU6A05HTg&qs=CAEyE0Nnb0k4X3lwcE9XcHhkMXhFQUU4CkIJERYm6YsM4qJyQgkRxgM_7XwFC51CCRHl09jTaSoWrFpHMkWqAUIQASoKIgZob3RlbHMoADIeEAEiGoFVNzrRNaRu_ES-BkUUNrkBuZWRTLLMO0ttMhIQAiIOaG90ZWxzIG5lYXIgbWU&ap=ugEHcmV2aWV3cw&ictx=111" target="_blank" rel="noreferrer" className="text-gold-dark font-semibold hover:underline">
            Read All Reviews on Google &rarr;
          </a>
        </div>
      </section>

      {/* Location Sneak Peek */}
      <section className="bg-brown-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-gold p-3 rounded-full">
              <MapPin size={24} className="text-brown-dark" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif">Find Us in Uyo</h3>
              <p className="text-gray-300">47 Dominic Utuk Ave, Uyo 520103, Akwa Ibom</p>
            </div>
          </div>
          <Link to="/contact" className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-brown-dark transition-colors rounded uppercase text-sm tracking-widest font-bold">
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
};

const AmenityPreview: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
    <div className="mb-4">{icon}</div>
    <h3 className="font-medium text-gray-800">{title}</h3>
  </div>
);

const ReviewCard: React.FC<{ name: string, date: string, text: string, rating: number }> = ({ name, date, text, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gold">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={`${i < rating ? 'fill-gold text-gold' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-gray-600 mb-4 italic">"{text}"</p>
    <div className="flex justify-between items-center text-sm text-gray-500 font-medium">
      <span>{name}</span>
      <span>{date}</span>
    </div>
  </div>
);

export default Home;