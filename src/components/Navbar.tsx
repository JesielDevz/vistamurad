import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'How to Buy', href: '#how-to-buy' },
    { name: 'Community', href: '#community' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-purple-900/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-pink-300 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Desktop Buy Now Button */}
          <div className="hidden md:flex">
            <a
              href="https://ethervista.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Buy Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-pink-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-white hover:text-pink-300 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Buy Now Button */}
            <a
              href="https://ethervista.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
