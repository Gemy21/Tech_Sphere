import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: <Globe size={40} />,
        title: 'Immersive Web Design',
        desc: 'Crafting stunning, high-fidelity visual identities that captivate and convert through elite UI/UX design.'
    },
    {
        icon: <Cpu size={40} />,
        title: 'Motion-Powered Experience',
        desc: 'Breathing life into code with "insane" GSAP and Framer Motion animations that create unforgettable digital journeys.'
    },
    {
        icon: <Rocket size={40} />,
        title: 'Desktop Architecture',
        desc: 'Building powerful, cross-platform desktop applications with seamless performance and standalone reliability.'
    },
    {
        icon: <ShieldCheck size={40} />,
        title: 'Next-Gen Scalability',
        desc: 'Architecting robust infrastructures that grow with your vision, ensuring speed, security, and global reach.'
    }
];

const Services = () => {
    return (
        <section id="services">
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>
                <span className="glitch-text" data-text="ELITE">ELITE</span> <span className="gradient-text">SERVICES</span>
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
