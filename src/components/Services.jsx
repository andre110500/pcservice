import React from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';
import { Cpu, MonitorSmartphone, Wrench, ShieldAlert, ArrowRight } from 'lucide-react';
import services from '../data/services';
import ImageSlideshow from './ImageSlideshow';

const Services = () => {
    const displayed = services.slice(0, 4);

    return (
        <section id="services" className="services-section">
            <div className="services-header">
                <h2 className="section-title">Nuestros <span>Servicios</span></h2>
                <p className="section-desc">Especializados en devolver a la vida tu tecnología</p>
            </div>

            <div className="services-content">
                <div className="services-grid">
                    {displayed.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-card-inner">
                                <div className="service-face service-face-front">
                                    <div className="icon-wrapper">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                                <div className="service-face service-face-back">
                                    <div className="back-emoji" role="img" aria-label={service.title}>{service.emoji}</div>
                                    <p>{service.more}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="services-image">
                    <ImageSlideshow
                        images={['/service.png', '/cable_management.png', '/cpu_paste.png', '/gpu_mounting.png']}
                        alt="Servicios"
                        interval={4000}
                    />
                    <div className="overlay"></div>
                </div>
            </div>

            <div className="services-footer">
                <Link to="/servicios" className="btn btn-primary">
                    Ver todos los servicios <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default Services;
