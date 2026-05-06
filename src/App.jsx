import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
