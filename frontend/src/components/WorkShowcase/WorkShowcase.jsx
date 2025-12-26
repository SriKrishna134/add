import React, { useState } from 'react';

const WorkShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Suite',
      category: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      stats: '7K+'
    },
    {
      title: 'Tech Venture',
      category: 'Campaign',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      stats: '100+'
    },
    {
      title: 'Consumer Brand',
      category: 'Packaging',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop',
      stats: '7M+'
    },
    {
      title: 'Digital Platform',
      category: 'Design System',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      stats: '50+'
    }
  ];

  return (
    <section style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      padding: '8rem 2rem'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 400,
            color: '#fff',
            marginBottom: '1.5rem',
            fontFamily: 'Georgia, serif'
          }}>
            Featured Work
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: '#999'
          }}>
            Partnering with ambitious brands & inspiring people.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {projects.map((project, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                cursor: 'pointer',
                transform: hoveredIndex === i ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#1a1a1a'
              }}>
                <img 
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.6s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem',
                  opacity: hoveredIndex === i ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}>
                  <span style={{
                    color: '#ef4444',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                    {project.stats}
                  </span>
                </div>
              </div>
              <div style={{ padding: '1.5rem 0' }}>
                <h3 style={{
                  fontSize: '2rem',
                  color: '#fff',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase; 