import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: <Globe size={40} />,
        title: 'Silver Web Systems',
        desc: 'Forging high-speed, metallic-grade web infrastructures for global scale.'
    },
    {
        icon: <Cpu size={40} />,
        title: 'Chrome AI',
        desc: 'Advanced intelligence layers wrapped in sleek, efficient silver-threaded code.'
    },
    {
        icon: <Rocket size={40} />,
        title: 'Tech Acceleration',
        desc: 'Propelling your project into the future with ultra-fast software engineering.'
    },
    {
        icon: <ShieldCheck size={40} />,
        title: 'Polished Security',
        desc: 'Unyielding, military-grade protection for your most valuable digital assets.'
    }
];

const Services = () => {
    return (
        <section id="services">
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>
                ELITE <span className="gradient-text">SERVICES</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px'
            }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                            y: -15,
                            rotateX: 3,
                            rotateY: 3,
                            scale: 1.02,
                            borderColor: 'rgba(255,255,255,0.4)',
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="liquid-glass"
                        style={{
                            padding: '40px',
                            borderRadius: '24px',
                            cursor: 'pointer',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.4s ease',
                            perspective: '1000px',
                            zIndex: 1
                        }}
                    >
                        <div style={{ color: '#fff', marginBottom: '25px', position: 'relative', zIndex: 2 }}>
                            {service.icon}
                        </div>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '15px', position: 'relative', zIndex: 2, color: '#fff' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, position: 'relative', zIndex: 2 }}>{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
