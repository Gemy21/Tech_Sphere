import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        { num: "01", title: "Visual Strategy", desc: "Mapping out the user journey with high-fidelity design prototypes and immersive wireframes." },
        { num: "02", title: "Motion Design", desc: "Infusing the interface with fluid, cinematic animations that engage and delight users." },
        { num: "03", title: "App Architecture", desc: "Engineering robust, scalable core structures for both web and standalone desktop platforms." },
        { num: "04", title: "Elite Launch", desc: "Deploying your digital experience with precision, ensuring seamless performance across all devices." }
    ];

    return (
        <section id="process">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
                    OUR <span className="gradient-text">STRATEGIC</span> FLOW
                </h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '15px' }}>Transforming abstract concepts into digital masterpieces.</p>
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
