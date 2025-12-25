import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Background3D from './components/canvas/Background3D';
import CursorGlow from './components/CursorGlow';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <CursorGlow />
      <Background3D />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <About />
      <Contact />
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#000' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © 2025 ATOMIA. FORGED IN IMAGINATION.
        </p>
      </footer>
    </main>
  );
}

export default App;
