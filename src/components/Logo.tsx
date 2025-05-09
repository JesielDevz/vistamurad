import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-pink-0 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
        <img 
          src="https://i.ibb.co/1JKmJSNz/logo.jpg"
          alt="Logo"
          className="w-10 h-10 object-contain rounded-full"
        />
      </div>
      <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-300">
        VISTAMURAD
      </span>
    </div>
  );
};

export default Logo;
