import React from 'react';
import './About.scss';
import { Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2 className="section-title">Sobre <span>Mí</span></h2>
                <p className="bio">
                    Soy un técnico independiente apasionado por la tecnología, con más de 10 años de experiencia arreglando todo tipo de equipos informáticos. Mi objetivo es ofrecer un servicio honesto, rápido y enfocado en solucionar problemas de raíz, no solo poner "parches temporales".
                </p>

                <div className="stats">
                    <div className="stat-item">
                        <Award className="icon" />
                        <div>
                            <h4>Garantía</h4>
                            <p>Trabajos asegurados</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <Clock className="icon" />
                        <div>
                            <h4>Rapidez</h4>
                            <p>Tiempos de entrega cortos</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <ThumbsUp className="icon" />
                        <div>
                            <h4>Confianza</h4>
                            <p>Cientos de clientes satisfechos</p>
                        </div>
                    </div>
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
