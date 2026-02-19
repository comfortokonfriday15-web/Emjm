import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brown-dark py-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">We're here to help with your booking and any questions.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-brown-dark mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cream p-3 rounded-full text-gold-dark"><MapPin size={24} /></div>
                  <div>
                    <p className="font-bold text-gray-800">Address</p>
                    <p className="text-gray-600">47 Dominic Utuk Ave, Uyo 520103,<br/>Akwa Ibom State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cream p-3 rounded-full text-gold-dark"><Phone size={24} /></div>
                  <div>
                    <p className="font-bold text-gray-800">Phone</p>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:08182222444" className="hover:text-gold transition-colors">0818 222 2444</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cream p-3 rounded-full text-gold-dark"><Mail size={24} /></div>
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <p className="text-gray-600">
                      <a href="mailto:info@eemjmhotels.com" className="hover:text-gold transition-colors">info@eemjmhotels.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cream p-3 rounded-full text-gold-dark"><Clock size={24} /></div>
                  <div>
                    <p className="font-bold text-gray-800">Hours</p>
                    <p className="text-gray-600">Reception: 24 Hours</p>
                    <p className="text-gray-600">Lounge: 24 Hours</p>
                    <p className="text-gray-600">Check-in: From 2:00 PM</p>
                    <p className="text-gray-600">Check-out: Until 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-lg font-bold text-green-900 mb-2">Fastest Booking</h3>
              <p className="text-green-800 mb-4 text-sm">For the quickest response, message us directly on WhatsApp.</p>
              <a 
                href="https://wa.me/2348182222444?text=Hello,%20I'm%20interested%20in%20booking%20a%20room%20at%20EEMJM%20Hotels." 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-green-whatsapp hover:bg-green-600 text-white font-bold py-3 px-6 rounded shadow transition-colors w-full text-center"
              >
                BOOK VIA WHATSAPP
              </a>
            </div>
          </div>

          {/* Right: Map & Form */}
          <div className="space-y-8">
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
              {/* Google Maps Embed Placeholder - Using a generic query for Uyo due to iframe restrictions with generic keys, 
                  but for a real app, use the specific embed code. Using a static image or a safe iframe here. */}
              <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.7456747444747!2d7.9333!3d5.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d56247c472301%3A0x2f8b5a0346850d99!2sEEMJM%20HOTELS%20AND%20SUITES!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded focus:border-gold outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded focus:border-gold outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full p-2 border border-gray-300 rounded focus:border-gold outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-3 rounded transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;