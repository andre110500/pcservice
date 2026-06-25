import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    const whatsappUrl = 'https://wa.me/573001234567?text=%C2%A1Hola!%20Quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20reparaci%C3%B3n%20de%20PCs.';
    const emailUrl = 'mailto:contacto@tecnicopc.com';
    const mapsUrl = 'https://maps.google.com/?q=CABA,+Buenos+Aires,+Argentina';

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>TechFix</h3>
                    <p>Mantenimiento, reparacion y optimizacion para que tu equipo funcione al maximo.</p>
                </div>

                <nav className="footer-links" aria-label="Navegacion del footer">
                    <h4>Secciones</h4>
                    <Link to="/" onClick={scrollToTop}>Inicio</Link>
                    <Link to="/servicios" onClick={scrollToTop}>Servicios</Link>
                    <Link to="/trabajos" onClick={scrollToTop}>Trabajos</Link>
                </nav>

                <div className="footer-contact">
                    <h4>Contacto</h4>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <Phone size={16} /> +1 234 567 8900
                    </a>
                    <a href={emailUrl}>
                        <Mail size={16} /> contacto@tecnicopc.com
                    </a>
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin size={16} /> Av. Corrientes 1234, CABA
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} TechFix. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
