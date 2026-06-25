import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './ServicesPage.scss';
import services from '../data/services';

const ServicesPage = () => {
    return (
        <div className="services-page">

            <header className="page-header">
                <h1>Catálogo de <span>Servicios</span></h1>
                <p>Soluciones a medida para potenciar y rescatar tus equipos.</p>
            </header>

            <section className="full-services-section">
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
                <div className="services-grid">
                    {services.map((srv) => (
                        <div key={srv.id} className="service-item">
                            <div className="service-item-inner">
                                <div className="service-face service-face-front">
                                    <CheckCircle2 className="check-icon" />
                                    <div>
                                        <h3>{srv.title}</h3>
                                        <p>{srv.desc}</p>
                                    </div>
                                </div>
                                <div className="service-face service-face-back">
                                    <p><span className="back-emoji" role="img" aria-label={srv.title}>{srv.emoji}</span>{srv.more}</p>
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
                            {services.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
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
