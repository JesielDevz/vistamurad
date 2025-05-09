import React from 'react';

const SocialCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}> = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl max-w-xs w-full">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-pink-100 mb-6">{description}</p>
      <a 
        href={buttonLink} 
        className="block text-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/30"
      >
        {buttonText}
      </a>
    </div>
  );
};

const Community: React.FC = () => {
  const socials = [
    {
      icon: (
        <img
          src="https://i.ibb.co/FbcW0MxY/xlogo.png"
          alt="Official X"
          style={{ width: 45, height: 45, objectFit: 'contain' }}
        />
      ),
      title: 'Official X',

      description: 'Follow us for the latest updates, announcements, and memes from the VISTAMURAD community.',
      buttonText: 'Follow on X',
      buttonLink: 'https://x.com/vistamurad?t=v1DvOASEPC_9vOzXKN-GGw&s=35',
    },
    {
      icon: (
        <img
          src="https://i.ibb.co/1txZLYjP/telegram.png"
          alt="Telegram"
          style={{ width: 45, height: 45, objectFit: 'contain' }}
        />
      ),
      title: 'Telegram',

      description: 'Join our active Telegram group to chat with the community and stay updated in real-time.',
      buttonText: 'Join Telegram',
      buttonLink: 'https://t.me/+lov0IxvuySphMzgx',
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-pink-200 max-w-2xl mx-auto">
            VISTAMURAD is more than just a token - it's a vibrant community of enthusiasts, developers, and visionaries.
          </p>
        </div>

        {/* Cards Centralization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {socials.map((social, index) => (
            <SocialCard
              key={index}
              icon={social.icon}
              title={social.title}
              description={social.description}
              buttonText={social.buttonText}
              buttonLink={social.buttonLink}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-3xl border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Community-Driven Development</h3>
          <p className="text-pink-100 max-w-3xl mx-auto mb-8">
            VISTAMURAD is built by the community, for the community. We believe in decentralized governance where every holder has a voice in shaping the future of our project.
          </p>
          <a 
            href="#governance" 
            className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 border border-white/30"
          >
            Learn About Governance
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
