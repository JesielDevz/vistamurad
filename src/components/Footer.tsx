import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className="bg-purple-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="mt-4 text-pink-100">
              VISTAMURAD is a community-driven decentralized cryptocurrency built for innovation and entertainment.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#twitter"
                className="h-10 w-10 bg-purple-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <img
                  src="./src/images/xho.png"
                  alt="Twitter"
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a
                href="#telegram"
                className="h-10 w-10 bg-purple-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <img
                  src="./src/images/telegramho.png" // Caminho da imagem do Telegram
                  alt="Telegram"
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a
                href="#discord"
                className="h-10 w-10 bg-purple-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <img
                  src="./src/images/logoho.png" // Caminho da imagem do Discord
                  alt="Discord"
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a
                href="mailto:info@vistamurad.com"
                className="h-10 w-10 bg-purple-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <img
                  src="./src/images/mail.png" // Caminho da imagem do Email
                  alt="Email"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tokenomics" className="text-pink-100 hover:text-pink-300 transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#how-to-buy" className="text-pink-100 hover:text-pink-300 transition-colors">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#community" className="text-pink-100 hover:text-pink-300 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#faq" className="text-pink-100 hover:text-pink-300 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-pink-100 hover:text-pink-300 transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contract</h3>
            <div className="bg-purple-800/50 p-4 rounded-lg border border-purple-600/30">
              <p className="text-pink-100 break-words">0x1234...ABCD</p>
              <button
                className="mt-2 text-pink-400 hover:text-pink-300 text-sm"
                onClick={() => navigator.clipboard.writeText('0x1234...ABCD')}
              >
                Copy Address
              </button>
            </div>
            <p className="mt-6 text-pink-100">
              Always verify the contract address before making any transactions.
            </p>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0">
            <p className="text-pink-100 text-sm">
              © {new Date().getFullYear()} VISTAMURAD. All rights reserved.
            </p>
            <p className="text-pink-300 text-sm">
              Powered by Ethervista.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#terms" className="text-pink-100 hover:text-pink-300 text-sm transition-colors">
              Terms
            </a>
            <a href="#privacy" className="text-pink-100 hover:text-pink-300 text-sm transition-colors">
              Privacy
            </a>
            <button
              onClick={scrollToTop}
              className="h-8 w-8 bg-purple-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
            >
              <ArrowUp size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
