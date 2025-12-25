import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 968);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="about">
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '60px' : '120px',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: isMobile ? '2.8rem' : '4rem', fontWeight: 800, marginBottom: '25px', lineHeight: 1.1 }}>
                        OUR <br />
                        <span className="gradient-text">STEEL CORE</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        marginBottom: '35px',
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        Born from the fusion of design and engineering excellence. We believe that the best software should not only work perfectly but should also radiate a sense of premium craftsmanship.
                    </p>
                    <ul style={{
                        listStyle: 'none',
                        color: '#f1f5f9',
                        fontWeight: 600,
                        textAlign: isMobile ? 'center' : 'left',
                        padding: 0
                    }}>
                        <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <span style={{ color: '#fff' }}>✦</span> Elite Technical Craftsmanship
                        </li>
                        <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <span style={{ color: '#fff' }}>✦</span> Future-Proof Architecture
                        </li>
                        <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <span style={{ color: '#fff' }}>✦</span> High-Performance Execution
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="liquid-glass"
                    style={{
                        height: isMobile ? '350px' : '450px',
                        borderRadius: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: isMobile ? '2.2rem' : '3.8rem',
                        fontWeight: 900,
                        color: 'rgba(255,255,255,0.03)',
                        textAlign: 'center',
                        lineHeight: 1.1,
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    FORGED <br /> IN <br /> CODE
                </motion.div>
            </div>
        </section>
    );
};

export default About;
