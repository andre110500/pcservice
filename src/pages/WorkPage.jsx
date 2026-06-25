import React from 'react';
import { ArrowLeft, HardDrive, ShieldCheck, Gamepad2, Settings, Fan, AlertTriangle, MonitorX, ThermometerSun, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkPage.scss';
import malwareDisinfectionImg from '../assets/malware_disinfection.png';
import cpuPasteCardImg from '../assets/cpu_paste_card.png';

const worksData = [
    {
        id: 1,
        title: 'Upgrade a SSD',
        desc: 'Clonación y transición de disco mecánico a estado sólido NMVe de alta velocidad.',
        backContent: '💿 Clonación completa del sistema y programas.\n\n✅ Instalación de SSD NVMe Samsung 970 EVO.\n\n⚡ Arranque mejorado de 45s a 8s.\n\n📊 Datos transferidos sin pérdidas.',
        tag: 'Antes / Después',
        img: '/work_ssd.png'
    },
    {
        id: 2,
        title: 'Armado de PC Gamer',
        desc: 'Ensamblaje minucioso de componentes premium con cable management perfecto.',
        backContent: '🖥️ PC gamer armada con Ryzen 5, RTX 3060 Ti, SSD NVMe y fuente 80+ Gold.\n\n🔧 Cable management prolijo.\n\n📈 Configuración estable.\n\n❄️ Temperaturas óptimas.',
        tag: 'Premium',
        img: '/hero.png'
    },
    {
        id: 3,
        title: 'Instalación de Windows',
        desc: 'Limpieza e instalación desde cero del sistema base junto con programas vitales.',
        backContent: '🪟 Formateo completo e instalación de Windows 11 Pro.\n\n🔧 Drivers actualizados.\n\n📦 Programas esenciales instalados.\n\n🚀 Sistema optimizado para mejor rendimiento.',
        tag: 'Formateo',
        img: '/service.png'
    },
    {
        id: 4,
        title: 'Cambio de Pasta Térmica',
        desc: 'Sustitución de pasta térmica reseca para disipar temperaturas extremas.',
        backContent: '🌡️ Pasta térmica anterior reseca.\n\n❄️ Aplicación de Arctic MX-4.\n\n🧽 Limpieza de disipadores.\n\n📉 Temperaturas reducidas de 85°C a 45°C.',
        tag: 'Mantenimiento',
        img: cpuPasteCardImg
    },
    {
        id: 5,
        title: 'Desinfección de Malware',
        desc: 'Remoción de virus que inyectan publicidad o secuestran la información valiosa.',
        backContent: '🛡️ Detección de malware avanzado.\n\n🛠️ Eliminación con herramientas especializadas.\n\n🔓 Recuperación de archivos.\n\n✅ Sistema limpio y protegido.',
        tag: 'Seguridad',
        img: malwareDisinfectionImg
    },
    {
        id: 6,
        title: 'Optimización General',
        desc: 'Aceleración de respuesta quitando programas en segundo plano que limitan.',
        backContent: '⚡ Eliminación de programas innecesarios.\n\n🚫 Servicios no utilizados desactivados.\n\n🧽 Limpieza de temporales.\n\n📈 Equipo mucho más ágil.',
        tag: 'Rendimiento',
        img: '/pc_before.png'
    }
];

const testimonialsData = [
    { id: 1, name: 'Marcos R.', comment: 'Mi notebook quedó muchísimo más rápida luego del cambio a SSD. Parecía una máquina de tirar, ahora vuela.', stars: 5, initial: 'M' },
    { id: 2, name: 'Valentina G.', comment: 'Súper amable y detallista. Reviso absolutamente todo al armar mi primera PC. Cable management espectacular.', stars: 5, initial: 'V' },
    { id: 3, name: 'Esteban C.', comment: 'La computadora me tiraba pantallazos azules a diario por temperatura. Cambio la pasta y limpio todo. ¡Gracias!', stars: 5, initial: 'E' },
    { id: 4, name: 'Lucía F.', comment: 'Tuve un virus que me bloqueaba archivos, lograron salvar mis fotos sensibles y formatearla como si fuese nueva de fábrica.', stars: 5, initial: 'L' }
];

const problemsData = [
    { title: 'PC extremadamente lenta', solution: 'Formateo de fábrica, desinfección o upgrade a disco de estado sólido.', icon: <Activity size={32} /> },
    {
        title: 'Sobrecalentamiento',
        solution: 'Limpieza profunda de disipadores y cambio de pasta térmica de alta conductividad.',
        icon: <ThermometerSun size={32} />,
        resourceUrl: 'https://www.alcpu.com/CoreTemp/',
        resourceLabel: 'Ver Core Temp'
    },
    {
        title: 'Pantalla Azul',
        solution: 'Diagnóstico extensivo de RAM/HDD y reparación del sector de arranque.',
        icon: <MonitorX size={32} />,
        resourceUrl: 'https://www.nirsoft.net/utils/blue_screen_view.html',
        resourceLabel: 'Ver BlueScreenView'
    },
    {
        title: 'Infectada con Virus',
        solution: 'Escaneo severo, limpieza de rootkits y recuperación de datos secuestrados.',
        icon: <ShieldCheck size={32} />,
        resourceUrl: 'https://www.virustotal.com/',
        resourceLabel: 'Analizar en VirusTotal'
    },
    { title: 'Ruido en ventilación', solution: 'Mantenimiento del eje magnético o reemplazo por coolers premium silenciosos.', icon: <Fan size={32} /> },
    {
        title: 'HDD Lleno / Roto',
        solution: 'Backup a disco externo, recuperación e instalación de nueva unidad.',
        icon: <HardDrive size={32} />,
        resourceUrl: 'https://crystalmark.info/en/software/crystaldiskinfo/',
        resourceLabel: 'Testear con CrystalDiskInfo'
    }
];

const WorkPage = () => {
    return (
        <div className="work-page">

            <header className="work-header fade-in">
                <h1>Trabajos Realizados y <span>Opiniones de Clientes</span></h1>
                <p>Conocé algunas de las reparaciones, optimizaciones y mejoras realizadas para nuestros clientes.</p>
            </header>

            <section className="works-section">
                <h2 className="fade-in">Galería de <span>Proyectos</span></h2>
                <div className="works-grid">
                    {worksData.map((work) => (
                        <div key={work.id} className="work-card fade-in">
                            <div className="work-card-inner">
                                <div className="work-face work-face-front">
                                    <div className="img-container">
                                        <img src={work.img} alt={work.title} loading="lazy" />
                                        {work.tag && <span className="work-tag">{work.tag}</span>}
                                    </div>
                                    <div className="card-content">
                                        <h3>{work.title}</h3>
                                        <p>{work.desc}</p>
                                    </div>
                                </div>
                                <div className="work-face work-face-back">
                                    <div className="back-content">
                                        <p>{work.backContent}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonials-section">
                <h2 className="fade-in">Lo que dicen <span>nuestros clientes</span></h2>
                <div className="testimonials-grid">
                    {testimonialsData.map((t) => (
                        <div key={t.id} className="testimonial-card fade-in">
                            <div className="card-header">
                                <div className="avatar">{t.initial}</div>
                                <div className="stars">★★★★★</div>
                            </div>
                            <p className="comment">"{t.comment}"</p>
                            <p className="client-name">- {t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="problems-section">
                <h2 className="fade-in">Soluciones a <span>Problemas Frecuentes</span></h2>
                <div className="problems-grid">
                    {problemsData.map((prob, i) => (
                        <div key={i} className="problem-card fade-in">
                            <div className="icon-wrapper">{prob.icon}</div>
                            <h4>{prob.title}</h4>
                            <p className="problem-solution">{prob.solution}</p>
                            {prob.resourceUrl && (
                                <a
                                    className="problem-resource-link"
                                    href={prob.resourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {prob.resourceLabel}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-final-section">
                <h2 className="fade-in">¿Necesitás ayuda con tu computadora?</h2>
                <p className="fade-in">Contacta a nuestro equipo para un diagnóstico y solución inmediata.</p>
                <Link to="/#contact" className="btn-cta fade-in" onClick={() => { window.location.href = '/#contact'; }}>
                    Contactar para Reparación
                </Link>
            </section>
        </div>
    );
};

export default WorkPage;
