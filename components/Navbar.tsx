import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-gold-dark tracking-wider">
              EEMJM<span className="text-brown-dark">HOTELS</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-gold ${
                  isActive(link.path) ? 'text-gold border-b-2 border-gold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:08182222444"
              className="flex items-center gap-2 bg-brown text-white px-4 py-2 rounded hover:bg-brown-dark transition-colors"
            >
              <Phone size={16} />
              <span>0818 222 2444</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md ${
                  isActive(link.path)
                    ? 'text-gold bg-cream'
                    : 'text-gray-700 hover:text-gold hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:08182222444"
              className="block px-3 py-3 text-base font-medium text-white bg-brown rounded-md hover:bg-brown-dark text-center mt-4"
            >
              Call Us: 0818 222 2444
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;