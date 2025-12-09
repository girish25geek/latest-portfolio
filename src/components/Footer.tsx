import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and{' '}
              <Code className="w-4 h-4 mx-1 text-primary-400" /> by DevOps Pro
            </p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} DevOps Portfolio. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            Built with React, TypeScript, Tailwind CSS, and Framer Motion.
            Optimized for performance and accessibility.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
