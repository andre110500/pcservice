import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesPage.scss';

const serviceList = [
    { id: 1, name: 'Limpieza Interna', desc: 'Eliminación del polvo y cambio de pasta térmica.' },
    { id: 2, name: 'Eliminación de Virus', desc: 'Desinfección completa de malware, troyanos y spyware.' },
    { id: 3, name: 'Optimización de Rendimiento', desc: 'Ajustes del sistema para máxima velocidad y fluidez.' },
    { id: 4, name: 'Formateo', desc: 'Reinstalación limpia del sistema operativo (Windows/Linux).' },
    { id: 5, name: 'Cambio HDD → SSD', desc: 'Clonación o instalación desde cero en un SSD mucho más veloz.' },
    { id: 6, name: 'Upgrade de Memoria RAM', desc: 'Instalación de nueva memoria y configuración de perfiles XMP.' },
    { id: 7, name: 'Backups de Información', desc: 'Resguardo seguro de tus datos importantes y personales.' },
    { id: 8, name: 'Instalación de Programas', desc: 'Software de ofimática, edición, diseño y utilidades.' },
    { id: 9, name: 'Armado de PCs', desc: 'Ensamblaje profesional de computadoras pieza por pieza.' },
    { id: 10, name: 'Asesoría de Setups Gamer', desc: 'Te oriento con tu presupuesto (yo no vendo piezas, solo te asesoro).' }
];

const pricingData = [
    { service: 'Diagnóstico general', price: '$15 USD' },
    { service: 'Limpieza profunda + Pasta Térmica', price: '$25 USD' },
    { service: 'Formateo + Windows + Programas', price: '$30 USD' },
    { service: 'Clonación HDD a SSD', price: '$20 USD' },
    { service: 'Eliminación de Virus / Optimización', price: '$25 USD' },
    { service: 'Armado de PC (Solo Mano de Obra)', price: '$40 USD' },
    { service: 'Asesoría Setup Gamer', price: '$10 USD' }
];

const ServicesPage = () => {
    return (
        <div className="services-page">
            <nav className="services-nav">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Volver al Inicio
                </Link>
            </nav>

            <header className="page-header">
                <h1>Catálogo de <span>Servicios</span></h1>
                <p>Soluciones a medida para potenciar y rescatar tus equipos.</p>
            </header>

            <section className="before-after-section">
                <h2>Experiencia Visual: <span>Antes y Después</span></h2>
                <div className="gallery-container">
                    <div className="image-card">
                        <span className="badge badge-before">Antes</span>
                        <img src="/pc_before.png" alt="PC Before" />
                        <div className="overlay">Polvo acumulado, cables sueltos, mal flujo de aire.</div>
                    </div>
                    <div className="image-card">
                        <span className="badge badge-after">Después</span>
                        <img src="/pc_after.png" alt="PC After" />
                        <div className="overlay">Limpieza impecable, cable management y luces perfectas.</div>
                    </div>
                </div>
            </section>

            <section className="full-services-section">
                <h2>Lo que puedo hacer <span>por ti</span></h2>
                <div className="services-grid">
                    {serviceList.map((srv) => (
                        <div key={srv.id} className="service-item">
                            <CheckCircle2 className="check-icon" />
                            <div>
                                <h3>{srv.name}</h3>
                                <p>{srv.desc}</p>
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

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Técnico PC Independiente. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default ServicesPage;
