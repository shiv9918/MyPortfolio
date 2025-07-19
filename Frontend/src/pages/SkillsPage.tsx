import React from 'react';
import Skills from '../components/sections/Skills';
import Footer from '../components/sections/Footer';

interface SkillsPageProps {
  is3DMode: boolean;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ is3DMode }) => (
  <>
    <Skills is3DMode={is3DMode} />
    <Footer />
  </>
);

export default SkillsPage;