import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Initializing Portfolio Experience...';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 20px #00D4FF',
              '0 0 40px #00D4FF',
              '0 0 20px #00D4FF'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 border-2 border-cyan-400 rounded-full mx-auto mb-8 relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full border-t-2 border-cyan-400 rounded-full"
          />
        </motion.div>
        
        <div className="text-xl font-mono text-cyan-400 h-8">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;