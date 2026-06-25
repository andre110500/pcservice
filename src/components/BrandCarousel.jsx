import React from 'react';
import './BrandCarousel.scss';

const brands = [
    { name: 'HyperX', logo: 'https://cdn.simpleicons.org/hyperx/ffffff', desc: 'Periféricos gamer de alto rendimiento y audio preciso.' },
    { name: 'AMD', logo: 'https://cdn.simpleicons.org/amd/ED1C24', desc: 'Procesadores Ryzen y GPUs Radeon para jugar y crear.' },
    { name: 'NVIDIA', logo: 'https://cdn.simpleicons.org/nvidia/76B900', desc: 'Placas GeForce con gran rendimiento y tecnologías RTX.' },
    { name: 'Intel', logo: 'https://cdn.simpleicons.org/intel/0071C5', desc: 'CPUs estables y potentes para todo tipo de equipos.' },
    { name: 'MSI', logo: 'https://cdn.simpleicons.org/msi/FF0000', desc: 'Motherboards y notebooks gaming con excelente calidad.' },
    {
        name: 'Gigabyte',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gigabyte_Technology_Logo.svg/330px-Gigabyte_Technology_Logo.svg.png',
        desc: 'Hardware confiable con buen balance precio/rendimiento.',
        logoClassName: 'brand-logo-invert'
    },
    { name: 'ASUS', logo: 'https://cdn.simpleicons.org/asus/0078D6', desc: 'Componentes robustos para setups profesionales y gamer.' },
    { name: 'Corsair', logo: 'https://cdn.simpleicons.org/corsair/F4D07F', desc: 'Fuentes, memorias y periféricos de calidad premium.' },
    { name: 'Kingston', logo: 'https://cdn.simpleicons.org/kingstontechnology/ffffff', desc: 'Memorias RAM y SSD rápidos y duraderos.' },
    {
        name: 'Logitech',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/330px-Logitech_logo.svg.png',
        desc: 'Mouse, teclados y accesorios cómodos y precisos.',
        logoClassName: 'brand-logo-invert'
    }
];

const BrandCarousel = () => {
    const loopBrands = [...brands, ...brands];

    return (
        <section className="brands-section">
            <div className="brands-header">
                <h2 className="section-title">Marcas con las que <span>Trabajo</span></h2>
                <p className="section-subtitle">Componentes y periféricos de marcas confiables y reconocidas.</p>
            </div>

            <div className="brands-carousel" aria-label="Carrusel de marcas">
                <div className="brands-track">
                    {loopBrands.map((brand, index) => (
                        <div className="brand-item" key={`${brand.name}-${index}`}>
                            <div className="brand-item-inner">
                                <div className="brand-face brand-face-front">
                                    <img
                                        src={brand.logo}
                                        alt={`Logo de ${brand.name}`}
                                        loading="lazy"
                                        className={brand.logoClassName}
                                    />
                                    <span>{brand.name}</span>
                                </div>
                                <div className="brand-face brand-face-back">
                                    <p>{brand.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
