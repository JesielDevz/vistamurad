import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Welcome to the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                VISTAMURAD
              </span>
              Community
            </h1>
            <p className="text-lg md:text-xl text-pink-100 mb-8">
              The most innovative and fun decentralized meme coin in the crypto universe. Join our vibrant community today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="https://ethervista.app/"
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 text-center"
              >
                Buy VISTAMURAD
              </a>
              <a
                href="https://x.com/vistamurad?t=v1DvOASEPC_9vOzXKN-GGw&s=35"
                target="_blank"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 border border-white/30 flex items-center justify-center gap-2 text-center"
              >
                Join Community <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative">
                <div className="text-white text-7xl md:text-8xl font-extrabold">
                  <img
                    src="./dist/assets/images/logo.png"
                    alt="Logo VISTAMURAD"
                    className="mx-auto w-45 h-45 object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Total Supply', value: '1,000,000,000' },
            { label: 'Holders', value: '10,000+' },
            { label: 'Community', value: '25,000+' },
            { label: 'Launch', value: 'May 2025' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <p className="text-pink-300 text-sm">{stat.label}</p>
              <p className="text-white text-xl md:text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
