import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import ParticleBackground from './components/3d/ParticleBackground';
import AccessibilityToggle from './components/AccessibilityToggle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [is3DMode, setIs3DMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ToastContainer />
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loading" />}
        </AnimatePresence>

        {!loading && (
          <>
            <AccessibilityToggle is3DMode={is3DMode} onToggle={setIs3DMode} />
            <Navigation />
            
            {is3DMode && <ParticleBackground />}
            
            <main className="relative z-10 pt-16">
              <Routes>
                <Route path="/" element={<HomePage is3DMode={is3DMode} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage is3DMode={is3DMode} />} />
                <Route path="/projects" element={<ProjectsPage is3DMode={is3DMode} />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;