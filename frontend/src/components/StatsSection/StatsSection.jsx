import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ followers: 0, projects: 0, clients: 0 });

  const targets = { followers: 7000, projects: 100, clients: 7000000 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        followers: Math.floor(targets.followers * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const format = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num + '+';
  };

  const stats = [
    { value: format(counts.followers), label: 'Active Followers' },
    { value: counts.projects + '+', label: 'Projects Delivered' },
    { value: format(counts.clients), label: 'Global Reach' }
  ];

  return (
    <section ref={sectionRef} style={{
      minHeight: '60vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      padding: '8rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem'
      }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.2}s`
            }}
          >
            <div style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700,
              color: '#ef4444',
              marginBottom: '1rem',
              textShadow: '0 0 30px rgba(239, 68, 68, 0.5)',
              fontFamily: 'Georgia, serif'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 500
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;  