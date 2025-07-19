import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Phone, Mail, Linkedin, Github, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const FloatingGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <MeshDistortMaterial
          color="#00D4FF"
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

interface HeroProps {
  is3DMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ is3DMode }) => {

  return (
    <section className="py-24 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center lg:text-left order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shivam Mishra
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl lg:text-2xl text-gray-300 mb-2"
          >
            Full-Stack Developer | AI Integration  | AI Tools Expert
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg text-gray-400 mb-4 max-w-2xl"
          >
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 items-center"
          >
            <a href="tel:+919628993700" className="text-cyan-400 hover:text-cyan-300 transition" title="Phone">
              <Phone size={28} />
            </a>
            <a href="mailto:shivammishra01329@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition" title="Email">
              <Mail size={28} />
            </a>
            <a href="https://linkedin.com/in/shiv9918" className="text-cyan-400 hover:text-cyan-300 transition" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/shiv9918" className="text-cyan-400 hover:text-cyan-300 transition" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={28} />
            </a>
            <a href="https://leetcode.com/shiv_9918" className="text-cyan-400 hover:text-cyan-300 transition" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <Code2 size={28} />
            </a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl"
          >
           Full-Stack Developer building scalable AI-integrated web applications using React, Flask, OpenAI API,Gemini API, and more.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00D4FF' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold rounded-lg transition-all duration-300"
              >
                <ChevronRight size={18} />
                Explore My Work
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00D4FF' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;