import React from 'react';
import { Wallet, ArrowRight, DollarSign, Share2 } from 'lucide-react';

const Step: React.FC<{
  number: number;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative">
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center z-10">
        {icon}
      </div>
      {number < 4 && (
        <div className="absolute left-8 top-16 md:left-10 md:top-10 h-20 md:h-24 border-l-2 border-dashed border-pink-400/50 hidden md:block"></div>
      )}
      <div className="md:ml-4">
        <h3 className="text-xl font-bold text-white mb-2">Step {number}: {title}</h3>
        <p className="text-pink-100">{description}</p>
      </div>
    </div>
  );
};

const HowToBuy: React.FC = () => {
  const steps = [
    {
      title: 'Create a Wallet',
      description: 'Download MetaMask or any other Ethereum wallet app to your phone or as a browser extension.',
      icon: <Wallet className="text-white" size={32} />,
    },
    {
      title: 'Add ETH to Your Wallet',
      description: 'Purchase Ethereum from any major exchange and transfer it to your personal wallet.',
      icon: <ArrowRight className="text-white" size={32} />,
    },
    {
      title: 'Connect to DEX & Swap',
      description: (
        <>
          Connect your wallet to{' '}
          <a
            href="https://ethervista.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-pink-200 hover:text-white transition"
          >
            ethervista.app
          </a>{' '}
          and swap ETH for VISTAMURAD.
        </>
      ),
      icon: <DollarSign className="text-white" size={32} />,
    },
    {
      title: 'Hold & Enjoy',
      description: 'Congratulations! You are now part of the VISTAMURAD community. Hold and watch your investment grow.',
      icon: <Share2 className="text-white" size={32} />,
    },
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-br from-pink-900 to-purple-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Buy VISTAMURAD</h2>
          <p className="text-pink-200 max-w-2xl mx-auto">
            Follow these simple steps to join the VISTAMURAD revolution and become part of our growing community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://ethervista.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Buy VISTAMURAD Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
