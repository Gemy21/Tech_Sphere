import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="contact" style={{ alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="liquid-glass"
                style={{
                    width: '100%',
                    maxWidth: '850px',
                    padding: isMobile ? '50px 25px' : '70px',
                    borderRadius: isMobile ? '30px' : '50px',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.08)'
                }}
            >
                <h2 style={{ fontSize: isMobile ? '2.5rem' : '3.8rem', fontWeight: 800, marginBottom: '20px' }}>
                    FORGE YOUR <span className="gradient-text">PROJECT</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: isMobile ? '40px' : '50px', fontSize: '1.1rem' }}>
                    Ready to build something elite? Let's discuss your vision and turn it into metallic-grade reality.
                </p>

                <form style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '20px'
                }}>
                    <input
                        type="text"
                        placeholder="Name"
                        style={{
                            gridColumn: 'span 1',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '20px',
                            borderRadius: '15px',
                            color: '#fff',
                            outline: 'none',
                            fontSize: '1rem',
                            transition: '0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={{
                            gridColumn: 'span 1',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '20px',
                            borderRadius: '15px',
                            color: '#fff',
                            outline: 'none',
                            fontSize: '1rem',
                            transition: '0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    <textarea
                        placeholder="Project Details"
                        rows="6"
                        style={{
                            gridColumn: isMobile ? 'span 1' : 'span 2',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '20px',
                            borderRadius: '15px',
                            color: '#fff',
                            outline: 'none',
                            resize: 'none',
                            fontSize: '1rem',
                            transition: '0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    ></textarea>

                    <button className="chrome-btn" style={{ gridColumn: isMobile ? 'span 1' : 'span 2', marginTop: '10px', fontSize: '1.2rem' }}>
                        Submit Vision
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
