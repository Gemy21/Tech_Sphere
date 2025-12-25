import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        { num: "01", title: "Discovery", desc: "We dive deep into your requirements and business goals to map out the perfect solution." },
        { num: "02", title: "Strategy", desc: "Architecting the system with metallic-grade precision and silver-plated logic." },
        { num: "03", title: "Development", desc: "Our elite engineers forge the code using performance-first methodologies." },
        { num: "04", title: "Deployment", desc: "Launching your high-fidelity digital asset with zero friction and maximum impact." }
    ];

    return (
        <section id="process">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
                    THE <span className="gradient-text">FORGE</span> PROCESS
                </h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '15px' }}>How we turn complex ideas into metallic reality.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px'
            }}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="liquid-glass"
                        style={{
                            padding: '60px 40px',
                            borderRadius: '30px',
                            position: 'relative',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            fontSize: '4rem',
                            fontWeight: 900,
                            color: 'rgba(255,255,255,0.03)',
                            position: 'absolute',
                            top: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 0
                        }}>
                            {step.num}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '15px', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Process;
