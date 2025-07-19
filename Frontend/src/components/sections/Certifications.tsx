import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  'Python Bootcamp 2025 – Udemy: Advanced Python, Flask, Pandas, Web Apps',
  'LeetCode DSA Mastery: Solved 300+ problems in Arrays, Trees, DP, Graphs',
  '3-Star Java Developer – HackerRank: Java OOP, Exception Handling, File IO'
];

const Certifications: React.FC = () => (
  <section className="py-24 relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
      </motion.div>
      <ul className="space-y-4">
        {certifications.map((cert, idx) => (
          <motion.li
            key={cert}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 text-lg text-gray-300"
          >
            {cert}
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications; 