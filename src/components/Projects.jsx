import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        { title: "Project Obsidian", category: "AI Systems", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
        { title: "Silver Cloud", category: "Infrastructure", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
        { title: "Chrome OS v2", category: "Operating Systems", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <section id="projects">
            <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
                    SELECTED <span className="gradient-text">FORGINGS</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Our latest elite software interventions.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        className="liquid-glass"
                        style={{
                            borderRadius: '30px',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            height: '300px',
                            backgroundImage: `url(${project.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(100%) brightness(0.8) contrast(1.2)',
                            transition: '0.5s'
                        }}
                            className="project-image"
                        />
                        <div style={{ padding: '30px' }}>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{project.category}</p>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '5px' }}>{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style>{`
        .project-image:hover { filter: grayscale(0%) brightness(1); }
      `}</style>
        </section>
    );
};

export default Projects;
