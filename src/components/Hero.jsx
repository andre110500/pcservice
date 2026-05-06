import React from 'react';
import './Hero.scss';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="title">
                    Reparación de PC <br />
                    <span className="highlight">Rápida y Confiable</span>
                </h1>
                <p className="subtitle">
                    Soluciones técnicas expertas para mantener tu equipo al máximo rendimiento. Diagnóstico profesional y reparaciones a nivel de componente.
                </p>
                <div className="cta-group">
                    <a href="#services" className="btn btn-primary">
                        Nuestros Servicios <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contacto
                    </a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="image-wrapper">
                    <img src="/hero.png" alt="PC Repair Technician" />
                    <div className="glow-effect"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
