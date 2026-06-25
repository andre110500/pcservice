import React from 'react';
import './Contact.scss';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Envíame un <span>Mensaje</span></h2>
                    <p className="contact-desc">
                        ¿Tienes algún problema con tu equipo? Cuéntame los detalles y te responderé lo antes posible con una solución y presupuesto aproximado.
                    </p>

                    <div className="info-list">
                        <a
                            href="https://wa.me/573001234567?text=¡Hola! Quiero información sobre los servicios de reparación de PCs."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-item"
                        >
                            <Phone className="icon" />
                            <div>
                                <h5>WhatsApp</h5>
                                <p>+1 234 567 8900</p>
                            </div>
                        </a>
                        <a
                            href="mailto:contacto@tecnicopc.com"
                            className="info-item"
                        >
                            <Mail className="icon" />
                            <div>
                                <h5>Email</h5>
                                <p>contacto@tecnicopc.com</p>
                            </div>
                        </a>
                        <a
                            href="https://maps.google.com/?q=CABA,+Buenos+Aires,+Argentina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-item"
                        >
                            <MapPin className="icon" />
                            <div>
                                <h5>Ubicación</h5>
                                <p>Av. Corrientes 1234, CABA</p>
                            </div>
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input type="text" placeholder="Tu Nombre" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Tu Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Describe el problema de tu equipo..." rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
