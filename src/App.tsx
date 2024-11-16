import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { HowItWorks } from './pages/HowItWorks';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { BusinessRegistrationModal } from './components/BusinessRegistrationModal';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBusinessModalOpen, setBusinessModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<Home onRegisterClick={() => setBusinessModalOpen(true)} />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks onRegisterClick={() => setBusinessModalOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BusinessRegistrationModal 
          isOpen={isBusinessModalOpen} 
          onClose={() => setBusinessModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;