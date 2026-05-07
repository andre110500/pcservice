import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ServicesPage from './pages/ServicesPage';
import './App.scss';

const Home = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
