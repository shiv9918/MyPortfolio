import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Madan Mohan Malaviya University of Technology',
    years: '2024 -- 2027',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    location: 'Gorakhpur, Uttar Pradesh',
    details: 'CGPA: 8.59/10 — Focus: Data Structures, Web Development, System Design'
  },
  {
    institution: 'Government Polytechnic Premdhar Patti',
    years: '2021 -- 2024',
    degree: 'Diploma in Computer Science and Engineering',
    location: 'Pratapgarh, Uttar Pradesh',
    details: 'Percentage: 81.08% — Core: Software Development, Programming, Networks'
  }
];

const Education: React.FC = () => (
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
            Education
          </span>
        </h2>
      </motion.div>
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <div className="text-lg font-semibold text-white">{edu.institution}</div>
              <div className="text-sm text-gray-400">{edu.years}</div>
            </div>
            <div className="text-md text-cyan-400 mb-1">{edu.degree}</div>
            <div className="text-sm text-gray-400 mb-1">{edu.location}</div>
            <div className="text-sm text-gray-300">{edu.details}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 