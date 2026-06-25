import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Tecnico PC Independiente</h3>
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
                    <p><Phone size={16} /> +1 234 567 8900</p>
                    <p><Mail size={16} /> contacto@tecnicopc.com</p>
                    <p><MapPin size={16} /> Av. Corrientes 1234, CABA</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} Tecnico PC Independiente. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
