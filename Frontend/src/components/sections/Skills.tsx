import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

const SkillOrb: React.FC<{ position: [number, number, number]; text: string; color: string }> = ({ 
  position, 
  text, 
  color 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.8} 
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.2}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

const Skills3D: React.FC = () => {
  const skills = [
    { name: 'React', position: [0, 0, 0] as [number, number, number], color: '#61DAFB' },
    { name: 'Node.js', position: [2, 1, -1] as [number, number, number], color: '#339933' },
    { name: 'Three.js', position: [-2, 0.5, 1] as [number, number, number], color: '#000000' },
    { name: 'TypeScript', position: [1.5, -1, 0.5] as [number, number, number], color: '#3178C6' },
    { name: 'MongoDB', position: [-1.5, -0.5, -0.5] as [number, number, number], color: '#47A248' },
    { name: 'GraphQL', position: [0, 1.5, -1.5] as [number, number, number], color: '#E10098' },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      {skills.map((skill) => (
        <SkillOrb
          key={skill.name}
          position={skill.position}
          text={skill.name}
          color={skill.color}
        />
      ))}
    </Canvas>
  );
};

interface SkillsProps {
  is3DMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ is3DMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'CPP','JavaScript' ,'SQL'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Backend',
      skills: ['Flask', 'FastAPI', 'RESTful APIs', 'JWT -Authantication'],
      color: 'from-green-400 to-cyan-500'
    },
    {
      title: 'AI Tools',
      skills: ['OpenAI API', 'Gemini API', 'Claude', 'Cursor AI'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Local Storage'],
      color: 'from-pink-400 to-red-500'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Netlify', 'Vercel', 'Render', 'Railway', 'GitHub Actions'],
      color: 'from-blue-400 to-green-500'
    },
    {
      title: 'Testing & Tools',
      skills: [ 'Postman', 'Chrome DevTools', 'Git', 'VS Code', 'IntelliJ'],
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;