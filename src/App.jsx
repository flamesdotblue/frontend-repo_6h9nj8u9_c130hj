import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Ensure smooth scrolling at the document level
    document.documentElement.classList.add('scroll-smooth');
    return () => document.documentElement.classList.remove('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
