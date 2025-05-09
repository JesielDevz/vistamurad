import React, { useState, useEffect } from 'react';
import { Menu, X, Copy } from 'lucide-react';
import Logo from './Logo';

const CONTRACT_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678'; // Substitua pelo endereço real

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para copiar para o clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Whitepaper', href: '#whitepaper' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'How to Buy', href: '#how-to-buy' },
    { name: 'Chart', href: '#chart' },
    { name: 'Roadmap', href: '#roadmap' },
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
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-pink-300 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            {/* Contrato */}
            <div className="flex items-center space-x-2 bg-purple-700/60 px-3 py-1 rounded-full select-all cursor-pointer transition hover:bg-purple-600"
                 onClick={handleCopy}
                 title="Copy contract address"
            >
              <span className="text-white font-mono text-xs">
                {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
              </span>
              <Copy size={16} className="text-pink-300" />
              {copied && (
                <span className="ml-2 text-green-300 text-xs font-semibold animate-pulse">
                  Copied!
                </span>
              )}
            </div>
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
            {/* Contrato - Mobile */}
            <div
              className="flex items-center space-x-2 bg-purple-700/60 px-3 py-2 rounded-full select-all cursor-pointer mt-2 transition hover:bg-purple-600"
              onClick={handleCopy}
              title="Copy contract address"
            >
              <span className="text-white font-mono text-xs">
                {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
              </span>
              <Copy size={16} className="text-pink-300" />
              {copied && (
                <span className="ml-2 text-green-300 text-xs font-semibold animate-pulse">
                  Copied!
                </span>
              )}
            </div>
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
