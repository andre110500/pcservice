import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './ServicesPage.scss';

const serviceList = [
    {
        id: 1,
        name: 'Limpieza Interna',
        desc: 'Eliminación del polvo y cambio de pasta térmica.',
        more: 'Mejora el flujo de aire, reduce temperaturas y ayuda a prevenir fallos por calor.',
        emoji: '🧽'
    },
    {
        id: 2,
        name: 'Eliminación de Virus',
        desc: 'Desinfección completa de malware, troyanos y spyware.',
        more: 'Se revisan extensiones, inicio automático y permisos para evitar reinfecciones.',
        emoji: '🛡️'
    },
    {
        id: 3,
        name: 'Optimización de Rendimiento',
        desc: 'Ajustes del sistema para máxima velocidad y fluidez.',
        more: 'Se limpia el arranque, se ajustan servicios y se corrigen cuellos de botella comunes.',
        emoji: '⚡'
    },
    {
        id: 4,
        name: 'Formateo',
        desc: 'Reinstalación limpia del sistema operativo (Windows/Linux).',
        more: 'Incluye drivers esenciales, actualizaciones y configuración base para un uso estable.',
        emoji: '🔄'
    },
    {
        id: 5,
        name: 'Cambio HDD → SSD',
        desc: 'Clonación o instalación desde cero en un SSD mucho más veloz.',
        more: 'Arranque y carga de programas mucho más rápidos, con configuración óptima del SSD.',
        emoji: '🚀'
    },
    {
        id: 6,
        name: 'Upgrade de Memoria RAM',
        desc: 'Instalación de nueva memoria y configuración de perfiles XMP.',
        more: 'Ideal para multitarea, juegos y edición: menos tirones y mejor respuesta del sistema.',
        emoji: '🧠'
    },
    {
        id: 7,
        name: 'Backups de Información',
        desc: 'Resguardo seguro de tus datos importantes y personales.',
        more: 'Copias ordenadas, verificación de integridad y opciones en disco externo o nube.',
        emoji: '☁️'
    },
    {
        id: 8,
        name: 'Instalación de Programas',
        desc: 'Software de ofimática, edición, diseño y utilidades.',
        more: 'Instalación limpia, configuraciones básicas y evitamos “bloatware” innecesario.',
        emoji: '🧩'
    },
    {
        id: 11,
        name: 'Instalación de Juegos',
        desc: 'Instalación y configuración de juegos populares como Roblox, Fortnite y Valorant, dejando launchers, drivers y ajustes básicos listos para jugar.',
        more: 'Configuración de Epic/Steam/Riot, optimización base y verificación de requisitos.',
        emoji: '🎮'
    },
    {
        id: 9,
        name: 'Armado de PCs',
        desc: 'Ensamblaje profesional de computadoras pieza por pieza.',
        more: 'Cable management prolijo, pruebas de estabilidad y temperaturas para entrega segura.',
        emoji: '🛠️'
    },
    {
        id: 10,
        name: 'Asesoría de Setups Gamer',
        desc: 'Te oriento con tu presupuesto (yo no vendo piezas, solo te asesoro).',
        more: 'Recomendaciones reales según uso (gaming/estudio/trabajo) y compatibilidades.',
        emoji: '🎧'
    }
];

const pricingData = [
    { service: 'Diagnóstico general', price: '$15.000 ARS' },
    { service: 'Limpieza profunda + Pasta Térmica', price: '$25.000 ARS' },
    { service: 'Formateo + Windows + Programas', price: '$30.000 ARS' },
    { service: 'Clonación HDD a SSD', price: '$20.000 ARS' },
    { service: 'Eliminación de Virus / Optimización', price: '$25.000 ARS' },
    { service: 'Armado de PC (Solo Mano de Obra)', price: '$40.000 ARS' },
    { service: 'Asesoría Setup Gamer', price: '$10.000 ARS' }
];

const ServicesPage = () => {
    return (
        <div className="services-page">

            <header className="page-header">
                <h1>Catálogo de <span>Servicios</span></h1>
                <p>Soluciones a medida para potenciar y rescatar tus equipos.</p>
            </header>

            <section className="before-after-section">
                <h2>Experiencia Visual: <span>Antes y Después</span></h2>
                <div className="comparison-container">
                    <div className="image-comparison">
                        <img src="/pc_before.png" alt="PC Antes del servicio" className="img-before" />
                        <img src="/pc_after.png" alt="PC Después del servicio" className="img-after" />
                        <span className="badge badge-status">Antes / Después</span>
                        <div className="overlay-desc">
                            Transformación: De polvo y desorden a cable management perfecto y luces espectaculares.
                        </div>
                    </div>
                </div>
            </section>

            <section className="full-services-section">
                <h2>Lo que puedo hacer <span>por ti</span></h2>
                <div className="services-grid">
                    {serviceList.map((srv) => (
                        <div key={srv.id} className="service-item">
                            <div className="service-item-inner">
                                <div className="service-face service-face-front">
                                    <CheckCircle2 className="check-icon" />
                                    <div>
                                        <h3>{srv.name}</h3>
                                        <p>{srv.desc}</p>
                                    </div>
                                </div>
                                <div className="service-face service-face-back">
                                    <p><span className="back-emoji" role="img" aria-label={srv.name}>{srv.emoji}</span>{srv.more}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pricing-section">
                <h2>Tabla de <span>Precios Estimados</span></h2>
                <p className="pricing-note">* Todos los precios son estimativos de mano de obra. No incluyen el costo del hardware.</p>
                <div className="table-responsive">
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th>Servicio</th>
                                <th>Costo Estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.service}</td>
                                    <td className="price-col">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;
