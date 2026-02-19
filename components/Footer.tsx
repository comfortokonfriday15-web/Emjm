import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold">EEMJM HOTELS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience luxury and authentic Nigerian hospitality in the heart of Uyo. 
              Your premier 4-star retreat designed for comfort and elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-gold-light">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="hover:text-gold transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/amenities" className="hover:text-gold transition-colors">Amenities</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-gold-light">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span>47 Dominic Utuk Ave, Uyo 520103, Akwa Ibom State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:08182222444" className="hover:text-white">0818 222 2444</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:info@eemjmhotels.com" className="hover:text-white">info@eemjmhotels.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Book Now */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-gold-light">Book Your Stay</h4>
            <p className="text-sm text-gray-300">Need immediate assistance? Our team is available 24/7.</p>
            <a 
              href="https://wa.me/2348182222444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-whatsapp hover:bg-green-600 transition-colors shadow-lg"
            >
              Book on WhatsApp
            </a>
            <p className="text-xs text-gray-400 text-center">24/7 Booking Assistance</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 EEMJM HOTELS. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>Competitor: Watbridge Hotels</span>
            <span>|</span>
            <span>Monty Suites</span>
            <span>|</span>
            <span>Rosmohr Gold</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-4">Prices shown are estimates. Contact us for current rates.</p>
      </div>
    </footer>
  );
};

export default Footer;