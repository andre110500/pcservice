import React from 'react';
import './Services.scss';
import { Cpu, MonitorSmartphone, Wrench, ShieldAlert } from 'lucide-react';

const servicesData = [
    {
        title: 'Reparación de Hardware',
        desc: 'Diagnóstico y sustitución de placas base, fuentes de alimentación, discos duros y otros componentes defectuosos.',
        icon: <Cpu size={40} />
    },
    {
        title: 'Optimización de Sistema',
        desc: 'Limpieza de virus, formateo, actualización de drivers e instalación de software para el máximo rendimiento.',
        icon: <MonitorSmartphone size={40} />
    },
    {
        title: 'Mantenimiento Preventivo',
        desc: 'Limpieza interna, cambio de pasta térmica y revisión de voltajes para prevenir fallos a largo plazo.',
        icon: <Wrench size={40} />
    },
    {
        title: 'Recuperación de Datos',
        desc: 'Rescate de información valiosa de discos duros dañados o sistemas corruptos.',
        icon: <ShieldAlert size={40} />
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-header">
                <h2 className="section-title">Nuestros <span>Servicios</span></h2>
                <p className="section-desc">Especializados en devolver a la vida tu tecnología</p>
            </div>

            <div className="services-content">
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="icon-wrapper">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="services-image">
                    <img src="/service.png" alt="Placa Base y Hardware" />
                    <div className="overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default Services;
