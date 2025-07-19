import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  is3DMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ is3DMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      id: 1,
      title: 'SmartEve – AI-Based Exam Platform',
      description: 'Developed a full-stack AI-powered exam portal using Flask backend and React frontend. Integrated Gemini API for intelligent question analysis and scoring automation. Deployed Dockerized app on Render; optimized queries reduced response time by 40%.',
      tech: ['Flask', 'PostgreSQL', 'React.js', 'Gemini API', 'Docker'],
      color: '#00D4FF',
      demoUrl: 'https://exam-sparks.vercel.app',
      githubUrl: 'https://github.com/shiv9918/exam-spark'
    },
    {
      id: 2,
      title: 'Prompt Marketplace',
      description: 'Built a prompt-selling platform with secure payment integration and RESTful APIs. Integrated LangChain-powered search with keyword extraction and vector database queries. Deployed application on AWS EC2 using GitHub Actions and automated CI/CD workflows.',
      tech: ['Flask', 'React.js', 'Stripe API', 'AWS EC2', 'SQLAlchemy', 'LangChain'],
      color: '#8B5CF6',
      demoUrl: 'https://promptpilot-flax.vercel.app',
      githubUrl: 'https://github.com/shiv9918/prompt'
    },
    {
      id: 3,
      title: 'Password Manager',
      description: 'Engineered a secure password manager using AES encryption and browser-based storage. Implemented responsive UI with Tailwind CSS and managed state via React Hooks.',
      tech: ['React.js', 'Tailwind CSS', 'LocalStorage' ],
      color: '#00FFFF',
      demoUrl: 'https://passvoult.netlify.app',
      githubUrl: 'https://github.com/shiv9918/PassWord-Manager'
    },
    {
      id: 4,
      title: 'MathsTeacher',
      description: 'Designed and implemented a scalable web application for solving mathematical problems using the Gemini API, supporting real-time response generation for 100+ users. Developed a responsive frontend interface using HTML5, CSS3, Bootstrap, and JavaScript, enhancing user experience and accessibility.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'API Integration', 'Problem Solving'],
      color: '#FFD700',
      demoUrl: 'https://mathsteacher.netlify.app',
      githubUrl: 'https://github.com/shiv9918/Maths-Teacher'
    },
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent development projects
          </p>
        </motion.div>
        <div className="grid gap-6">
          {selectedProject ? (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </motion.div>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;