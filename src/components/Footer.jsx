import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              Portfolio<span className="text-red-500">.</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>by Mekala Bhavana</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Mekala Bhavana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;