import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-6 bg-gray-900 border-t border-gray-700/50 text-center text-gray-400 mt-12">
    <div className="max-w-7xl mx-auto px-4">
      <p className="mb-1">&copy; {new Date().getFullYear()} Shivam Mishra. All rights reserved.</p>
      <p className="text-sm">Built with React, TypeScript, and Tailwind CSS.</p>
    </div>
  </footer>
);

export default Footer; 