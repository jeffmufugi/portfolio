import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './homepage.jsx';
import Projects from './projects.jsx';
import About from './about.jsx';
import Resume from './resume.jsx';
import Certs from './certs.jsx';
import Menu from './menu.jsx';
import ScrollToTop from './scroll.jsx';
import { AnimatePresence } from 'framer-motion';

// Create a wrapper component to use hooks inside Router
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/certifications" element={<Certs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App