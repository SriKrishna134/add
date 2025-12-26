import React, { useEffect, useRef, useState } from 'react';

const FallingTextSection = () => {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  const tags = [
    'Campaign', 'Design Systems', 'Naming', 'Packaging',
    'Brand Identity', 'Logo Design', 'Photo Direction',
    'Copywriting', 'Apparel', 'Illustration'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      padding: '8rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1400px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: '4rem',
          fontFamily: 'Georgia, serif',
          color: '#fff'
        }}>
          Helping our partners<br/>
          build original brands<br/>
          <span style={{ fontStyle: 'italic' }}>that shine.</span>
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          margin: '4rem 0',
          minHeight: '250px'
        }}>
          {tags.map((tag, i) => (
            <div
              key={i}
              style={{
                padding: '1rem 2rem',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                color: '#fff',
                opacity: triggered ? 1 : 0,
                transform: triggered ? 'translateY(0) rotate(0deg)' : 'translateY(-1000px) rotate(180deg)',
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.8)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <p style={{
          fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
          color: '#999',
          margin: '3rem 0',
          lineHeight: 1.6
        }}>
          A strategy-led design studio specializing in laying<br/>
          down the awesome sauce <em style={{ fontStyle: 'italic', color: '#fff' }}>for</em> B2B brands.
        </p>

        <button style={{
          padding: '1.2rem 3rem',
          background: 'transparent',
          color: '#fff',
          border: '2px solid #fff',
          borderRadius: '4px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          marginTop: '2rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#ef4444';
          e.currentTarget.style.borderColor = '#ef4444';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = '#fff';
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          Our Work
        </button>
      </div>
    </section>
  );
};

export default FallingTextSection;