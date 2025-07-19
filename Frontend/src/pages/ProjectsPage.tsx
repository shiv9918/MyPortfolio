import React from 'react';
import Projects from '../components/sections/Projects';
import Footer from '../components/sections/Footer';

interface ProjectsPageProps {
  is3DMode: boolean;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ is3DMode }) => (
  <>
    <Projects is3DMode={is3DMode} />
    <Footer />
  </>
);

export default ProjectsPage;