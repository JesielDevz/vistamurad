import React from 'react';
import { PieChart, Coins, Shield, Rocket } from 'lucide-react';

const TokenomicsCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  percentage: string;
}> = ({ icon, title, description, percentage }) => {
  return (
    <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-pink-300 font-semibold">{percentage}</p>
        </div>
      </div>
      <p className="text-pink-100">{description}</p>
    </div>
  );
};

const Tokenomics: React.FC = () => {
  const tokenomicsData = [
    {
      icon: <PieChart className="text-white" size={24} />,
      title: 'Community Allocation',
      percentage: '50%',
      description: 'Half of all tokens are distributed to the community through fair launch and rewards.',
    },
    {
      icon: <Coins className="text-white" size={24} />,
      title: 'Liquidity Pool',
      percentage: '30%',
      description: 'Locked liquidity to ensure stable trading and long-term sustainability.',
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Development Fund',
      percentage: '15%',
      description: 'Reserved for future development, marketing, and ecosystem growth.',
    },
    {
      icon: <Rocket className="text-white" size={24} />,
      title: 'Team Allocation',
      percentage: '5%',
      description: 'Small allocation for the team, vested over a long period to ensure commitment.',
    },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-purple-800 to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-pink-200 max-w-2xl mx-auto">
            VISTAMURAD is built with a balanced and sustainable tokenomics model designed to reward holders and ensure long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tokenomicsData.map((item, index) => (
            <TokenomicsCard
              key={index}
              icon={item.icon}
              title={item.title}
              percentage={item.percentage}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-purple-800/30 backdrop-blur-md rounded-3xl p-8 border border-purple-600/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Token Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: 'Token Name', value: 'VISTAMURAD' },
              { label: 'Token Symbol', value: 'VMURAD' },
              { label: 'Total Supply', value: '1,000,000,000 VMURAD' },
              { label: 'Blockchain', value: 'Ethereum' },
              { label: 'Tax', value: '0% Buy / 0% Sell' },
              { label: 'Launch Date', value: 'May 2025' },
            ].map((detail, index) => (
              <div key={index} className="text-center">
                <p className="text-pink-300 mb-1">{detail.label}</p>
                <p className="text-white font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;