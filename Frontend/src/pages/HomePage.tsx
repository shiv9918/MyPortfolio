import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import Footer from '../components/sections/Footer';

interface HomePageProps {
  is3DMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ is3DMode }) => {
  return (
    <div>
      <Hero is3DMode={is3DMode} />
      <About />
      <Skills is3DMode={is3DMode} />
      <Projects is3DMode={is3DMode} />
      <Education />
      <Certifications />
      <Footer />
    </div>
  );
};

export default HomePage;