import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/2348182222444"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-whatsapp text-white px-5 py-3 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105 group"
      aria-label="Book on WhatsApp"
    >
      <MessageCircle size={24} className="fill-current" />
      <span className="font-semibold hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;