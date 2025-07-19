import React from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

interface AccessibilityToggleProps {
  is3DMode: boolean;
  onToggle: (mode: boolean) => void;
}

const AccessibilityToggle: React.FC<AccessibilityToggleProps> = ({ is3DMode, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-20 right-4 z-40"
    >
      <motion.button
        onClick={() => onToggle(!is3DMode)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
          is3DMode 
            ? 'bg-cyan-400/20 border-cyan-400/50 text-cyan-400' 
            : 'bg-gray-700/50 border-gray-600 text-gray-300'
        }`}
        title={is3DMode ? 'Switch to 2D Mode' : 'Switch to 3D Mode'}
      >
        {is3DMode ? <Eye size={20} /> : <EyeOff size={20} />}
      </motion.button>
    </motion.div>
  );
};

export default AccessibilityToggle;