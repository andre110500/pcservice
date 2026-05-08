import React, { useState } from 'react';
import './About.scss';
import { Award, Clock, ThumbsUp } from 'lucide-react';

const featureItems = [
    {
        title: 'Garantía',
        subtitle: 'Trabajos asegurados',
        more: 'Todos los servicios incluyen garantía de mano de obra, ajustes posteriores y soporte de seguimiento para que no tengas que preocuparte por problemas recurrentes.',
        emoji: '🛡️'
    },
    {
        title: 'Rapidez',
        subtitle: 'Tiempos de entrega cortos',
        more: 'Respondo rápido desde el primer contacto, realizo diagnósticos ágiles y entrego el equipo lo antes posible sin sacrificar la calidad del trabajo.',
        emoji: '⚡'
    },
    {
        title: 'Confianza',
        subtitle: 'Cientos de clientes satisfechos',
        more: 'Trabajo con honestidad, explico cada paso del proceso y respaldo mis servicios con reseñas reales de clientes que regresan y recomiendan.',
        emoji: '🤝'
    }
];

const About = () => {
    const [openIndex, setOpenIndex] = useState([]);

    const toggleOpen = (index) => {
        setOpenIndex((current) => 
            current.includes(index) 
                ? current.filter(i => i !== index) 
                : [...current, index]
        );
    };

    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2 className="section-title">Sobre <span>Mí</span></h2>
                <p className="bio">
                    Soy un técnico independiente apasionado por la tecnología, con más de 10 años de experiencia arreglando todo tipo de equipos informáticos. Mi objetivo es ofrecer un servicio honesto, rápido y enfocado en solucionar problemas de raíz, no solo poner "parches temporales".
                </p>

                <div className="stats">
                    {featureItems.map((item, index) => (
                        <div
                            key={item.title}
                            className={`stat-item ${openIndex.includes(index) ? 'open' : ''}`}
                            onClick={() => toggleOpen(index)}
                        >
                            <div className="stat-header">
                                <div className="stat-icon">
                                    {index === 0 ? <Award className="icon" /> : index === 1 ? <Clock className="icon" /> : <ThumbsUp className="icon" />}
                                </div>
                                <div>
                                    <div className="stat-title-row">
                                        <span className="stat-emoji" role="img" aria-label={item.title}>{item.emoji}</span>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <p>{item.subtitle}</p>
                                </div>
                                <span className="toggle-arrow">{openIndex.includes(index) ? '▲' : '▼'}</span>
                            </div>
                            <div className="stat-description">
                                <p>{item.more}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about-image">
                <img src="/about.png" alt="Técnico trabajando" />
                <div className="glow-circle"></div>
            </div>
        </section>
    );
};

export default About;
