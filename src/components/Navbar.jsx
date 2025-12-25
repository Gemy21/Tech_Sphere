import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = ['Services', 'Process', 'Projects', 'About', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '20px 0',
                zIndex: 1000,
                pointerEvents: 'none'
            }}
        >
            <div
                className="glass-morphism"
                style={{
                    width: '95%',
                    maxWidth: '1200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: scrolled ? '10px 30px' : '15px 40px',
                    borderRadius: '100px',
                    border: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                    pointerEvents: 'auto'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src={logo} alt="TechSphere Logo" style={{ width: scrolled ? '35px' : '45px', height: scrolled ? '35px' : '45px', transition: '0.4s' }} />
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#fff', display: scrolled ? 'none' : 'block' }}>TECH<span className="gradient-text">SPHERE</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '30px', fontWeight: 500 }}>
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                color: 'rgba(255,255,255,0.7)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                position: 'relative',
                                transition: '0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#fff'}
                            onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button className="desktop-menu chrome-btn" style={{
                        padding: '10px 25px',
                        fontSize: '0.75rem',
                        borderRadius: '100px'
                    }}>
                        Start Project
                    </button>

                    <button
                        onClick={toggleMenu}
                        className="mobile-toggle"
                        style={{ display: 'none', background: 'none', border: 'none', color: '#fff' }}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '85%',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.98)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '80px 40px',
                            gap: '20px',
                            pointerEvents: 'auto'
                        }}
                    >
                        <button onClick={toggleMenu} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: '#fff', marginBottom: '40px' }}>
                            <X size={32} />
                        </button>
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={toggleMenu}
                                style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
