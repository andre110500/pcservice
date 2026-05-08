import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BrandCarousel from './components/BrandCarousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import './App.scss';

const Home = () => (
  <>
    <Hero />
    <Services />
    <BrandCarousel />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/trabajos" element={<WorkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
