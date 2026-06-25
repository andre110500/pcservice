import React, { useEffect, useState } from 'react';
import './Hero.scss';
import { ArrowRight } from 'lucide-react';
import ImageSlideshow from './ImageSlideshow';
import ParticleField from './ParticleField';

const Hero = () => {
    const fullSubtitle = 'Soluciones técnicas expertas para mantener tu equipo al máximo rendimiento. Diagnóstico profesional y reparaciones a nivel de componente.';
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText((prev) => fullSubtitle.slice(0, index + 1));
            index += 1;
            if (index >= fullSubtitle.length) {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <ParticleField />
            <div className="hero-content">
                <h1 className="title">
                    Reparación de PC <br />
                    <span className="highlight">Rápida y Confiable</span>
                </h1>
                <p className="subtitle">
                    <span className="subtitle-placeholder" aria-hidden="true">{fullSubtitle}</span>
                    <span className="typed-text">{typedText}<span className="typing-cursor">|</span></span>
                </p>
                <div className="cta-group">
                    <a href="#contact" className="btn btn-primary">
                        Pedir presupuesto <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="image-wrapper">
                    <ImageSlideshow
                        images={['/hero.png', '/man_working.png', '/laptop_repair.png']}
                        alt="PC Repair Technician"
                        interval={4500}
                    />
                    <div className="glow-effect"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
