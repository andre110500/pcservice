import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="global-navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <Monitor className="icon" size={28} />
                    <span>TechFix</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
                    <Link to="/servicios" className={location.pathname === '/servicios' ? 'active' : ''}>Servicios</Link>
                    <Link to="/trabajos" className={location.pathname === '/trabajos' ? 'active' : ''}>Trabajos y Reseñas</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
