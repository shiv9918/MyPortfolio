import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'End-to-end solutions using modern technologies'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Tools Expert',
      description: 'Expertise in OpenAI, Gemini, Cursor, Claude, and more'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Building fast, scalable applications'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Modern Web Technologies',
      description: 'Staying current with industry trends'
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innovative and detail-oriented Full-Stack Developer with a strong foundation in Java, DSA, and scalable web development. Proficient in building responsive applications using React.js, Node.js, and MongoDB, with hands-on experience in RESTful API design and real-time systems. Demonstrated ability to build impactful projects like traffic monitoring systems and WhatsApp clones. Currently sharpening algorithmic thinking through Striver’s DSA Sheet and building production-ready projects. Passionate about delivering smart, user-focused solutions and continuously exploring emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in creating digital experiences that not only look stunning but also 
              solve real problems. Every line of code I write is an opportunity to push the 
              boundaries of what's possible on the web, while maintaining clean, maintainable, 
              and accessible solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;