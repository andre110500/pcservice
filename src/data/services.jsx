import React from 'react';
import { Cpu, MonitorSmartphone, Wrench, ShieldAlert } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Reparación de Hardware',
        desc: 'Diagnóstico y sustitución de placas base, fuentes de alimentación, discos duros y otros componentes defectuosos.',
        more: 'Diagnóstico completo, reparación precisa y pruebas finales para asegurar que tu equipo vuelva a funcionar con estabilidad.',
        emoji: '🛠️',
        icon: <Cpu size={40} />,
        price: '$45.000 ARS'
    },
    {
        id: 2,
        title: 'Optimización de Sistema',
        desc: 'Limpieza de virus, formateo, actualización de drivers e instalación de software para el máximo rendimiento.',
        more: 'Se optimiza el sistema, se eliminan procesos innecesarios y se deja el equipo más rápido y fluido.',
        emoji: '⚡',
        icon: <MonitorSmartphone size={40} />,
        price: '$25.000 ARS'
    },
    {
        id: 3,
        title: 'Mantenimiento Preventivo',
        desc: 'Limpieza interna, cambio de pasta térmica y revisión de voltajes para prevenir fallos a largo plazo.',
        more: 'Incluye limpieza profunda, revisión de disipación térmica y ajustes para prolongar la vida útil de tu PC.',
        emoji: '🧽',
        icon: <Wrench size={40} />,
        price: '$20.000 ARS'
    },
    {
        id: 4,
        title: 'Recuperación de Datos',
        desc: 'Rescate de información valiosa de discos duros dañados o sistemas corruptos.',
        more: 'Recuperamos archivos importantes con cuidado y te ayudamos a guardar copias seguras.',
        emoji: '💾',
        icon: <ShieldAlert size={40} />,
        price: '$35.000 ARS'
    },
    {
        id: 5,
        title: 'Limpieza Interna',
        desc: 'Eliminación del polvo y cambio de pasta térmica.',
        more: 'Mejora el flujo de aire, reduce temperaturas y ayuda a prevenir fallos por calor.',
        emoji: '🧽',
        icon: null,
        price: '$20.000 ARS'
    },
    {
        id: 6,
        title: 'Eliminación de Virus',
        desc: 'Desinfección completa de malware, troyanos y spyware.',
        more: 'Se revisan extensiones, inicio automático y permisos para evitar reinfecciones.',
        emoji: '🛡️',
        icon: null,
        price: '$25.000 ARS'
    },
    {
        id: 7,
        title: 'Formateo',
        desc: 'Reinstalación limpia del sistema operativo (Windows/Linux).',
        more: 'Incluye drivers esenciales, actualizaciones y configuración base para un uso estable.',
        emoji: '🔄',
        icon: null,
        price: '$30.000 ARS'
    },
    {
        id: 8,
        title: 'Cambio HDD → SSD',
        desc: 'Clonación o instalación desde cero en un SSD mucho más veloz.',
        more: 'Arranque y carga de programas mucho más rápidos, con configuración óptima del SSD.',
        emoji: '🚀',
        icon: null,
        price: '$20.000 ARS'
    },
    {
        id: 9,
        title: 'Upgrade de Memoria RAM',
        desc: 'Instalación de nueva memoria y configuración de perfiles XMP.',
        more: 'Ideal para multitarea, juegos y edición: menos tirones y mejor respuesta del sistema.',
        emoji: '🧠',
        icon: null,
        price: '$18.000 ARS'
    },
    {
        id: 10,
        title: 'Backups de Información',
        desc: 'Resguardo seguro de tus datos importantes y personales.',
        more: 'Copias ordenadas, verificación de integridad y opciones en disco externo o nube.',
        emoji: '☁️',
        icon: null,
        price: '$12.000 ARS'
    },
    {
        id: 11,
        title: 'Instalación de Programas',
        desc: 'Software de ofimática, edición, diseño y utilidades.',
        more: 'Instalación limpia, configuraciones básicas y evitamos “bloatware” innecesario.',
        emoji: '🧩',
        icon: null,
        price: '$8.000 ARS'
    },
    {
        id: 12,
        title: 'Instalación de Juegos',
        desc: 'Instalación y configuración de juegos populares dejando launchers, drivers y ajustes básicos listos para jugar.',
        more: 'Configuración de Epic/Steam/Riot, optimización base y verificación de requisitos.',
        emoji: '🎮',
        icon: null,
        price: '$10.000 ARS'
    },
    {
        id: 13,
        title: 'Armado de PCs',
        desc: 'Ensamblaje profesional de computadoras pieza por pieza.',
        more: 'Cable management prolijo, pruebas de estabilidad y temperaturas para entrega segura.',
        emoji: '🛠️',
        icon: null,
        price: '$40.000 ARS'
    },
    {
        id: 14,
        title: 'Asesoría de Setups Gamer',
        desc: 'Te oriento con tu presupuesto (yo no vendo piezas, solo te asesoro).',
        more: 'Recomendaciones reales según uso (gaming/estudio/trabajo) y compatibilidades.',
        emoji: '🎧',
        icon: null,
        price: '$10.000 ARS'
    }
];

export default services;
