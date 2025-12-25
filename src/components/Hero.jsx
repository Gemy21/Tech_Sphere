import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import Hero3D from './canvas/Hero3D';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="hero" style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '100vh',
            gap: isMobile ? '20px' : '40px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Text Decor with Light Sweep Effect */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: isMobile ? '8rem' : '20rem',
                fontWeight: 900,
                zIndex: -1,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>
                <motion.div
                    animate={{ backgroundPosition: ['100% 0%', '-100% 0%'] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    style={{
                        background: 'inherit',
                        WebkitBackgroundClip: 'inherit',
                        WebkitTextFillColor: 'inherit',
                    }}
                >
                    TECH SPHERE
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                    flex: 1,
                    textAlign: isMobile ? 'center' : 'left',
                    zIndex: 2
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        display: 'inline-block',
                        padding: '5px 15px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '20px',
                        fontSize: '0.7rem',
                        letterSpacing: '2px',
                        marginBottom: '20px',
                        color: 'var(--secondary)'
                    }}
                >
                    ESTABLISHED 2025
                </motion.div>

                <h1 style={{
                    fontSize: isMobile ? '3.5rem' : '6.5rem',
                    fontWeight: 900,
                    lineHeight: 0.9,
                    marginBottom: '25px',
                    letterSpacing: '-2px'
                }}>
                    ELITE <br />
                    <span className="gradient-text">METALIC</span> <br />
                    PRECISION
                </h1>

                <p style={{
                    fontSize: isMobile ? '1rem' : '1.3rem',
                    color: 'var(--text-muted)',
                    maxWidth: isMobile ? '100%' : '500px',
                    marginBottom: '40px',
                    lineHeight: 1.5
                }}>
                    Crafting the next generation of software with a focus on high-fidelity performance and silver-grade aesthetics.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '20px',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    alignItems: 'center'
                }}>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="chrome-btn"
                        style={{ fontSize: '1rem', letterSpacing: '1px' }}
                    >
                        INITIALIZE PROJECT
                    </motion.button>
                </div>
            </motion.div>

            <div style={{
                flex: 1,
                height: isMobile ? '450px' : '700px',
                width: '100%',
                position: 'relative'
            }}>
                <Canvas shadows>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={isMobile ? 45 : 35} />
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.6} />
                        <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" castShadow />
                        <spotLight
                            position={[-15, 15, 15]}
                            angle={0.3}
                            penumbra={1}
                            intensity={4}
                            color="#ffffff"
                            castShadow
                        />

                        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                            <Hero3D />
                        </Float>

                        <OrbitControls
                            enableZoom={false}
                            autoRotate
                            autoRotateSpeed={0.8}
                            enableDamping
                        />
                    </Suspense>
                </Canvas>

                {/* Decorative Elements */}
                {!isMobile && (
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '0',
                        fontSize: '0.6rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '5px',
                        writingMode: 'vertical-rl',
                        opacity: 0.5
                    }}>
                        3D RENDERING ACTIVE // CORE_STABLE
                    </div>
                )}
            </div>

            {/* Scanline Effect Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02))',
                backgroundSize: '100% 4px, 3px 100%',
                pointerEvents: 'none',
                zIndex: 100
            }}></div>
        </section>
    );
};

export default Hero;
