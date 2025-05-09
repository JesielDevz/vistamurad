import React from 'react';

const SocialCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}> = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl max-w-xs w-full">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-pink-100 text-sm sm:text-base mb-5 sm:mb-6">{description}</p>
      <a 
        href={buttonLink} 
        className="block text-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/30 text-sm sm:text-base"
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
          className="w-6 h-6 sm:w-[45px] sm:h-[45px] object-contain"
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
          className="w-6 h-6 sm:w-[45px] sm:h-[45px] object-contain"
        />
      ),
      title: 'Telegram',
      description: 'Join our active Telegram group to chat with the community and stay updated in real-time.',
      buttonText: 'Join Telegram',
      buttonLink: 'https://t.me/+lov0IxvuySphMzgx',
    }
  ];

  return (
    <section id="community" className="py-12 sm:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Join Our Community</h2>
          <p className="text-pink-200 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
            VISTAMURAD is more than just a token - it's a vibrant community of enthusiasts, developers, and visionaries.
          </p>
        </div>

        {/* Cards Centralization */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 justify-items-center">
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

        <div className="mt-10 sm:mt-16 p-5 sm:p-8 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl sm:rounded-3xl border border-white/10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Community-Driven Development</h3>
          <p className="text-pink-100 max-w-xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            VISTAMURAD is built by the community, for the community. We believe in decentralized governance where every holder has a voice in shaping the future of our project.
          </p>
          <a 
            href="#governance" 
            className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 border border-white/30 text-sm sm:text-base"
          >
            Learn About Governance
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
