import React, { useState, useEffect, useRef } from 'react';

const CursorDragon = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setIsMoving(true);
    };

    const animate = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.15;
      currentPos.current.y += dy * 0.15;

      setPosition({
        x: currentPos.current.x,
        y: currentPos.current.y
      });

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isMoving) return null;

  return (
    <div style={{
      position: 'fixed',
      left: position.x,
      top: position.y,
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: 9998,
      transition: 'opacity 0.3s'
    }}>
      <div style={{
        fontSize: '2.5rem',
        filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.7))',
        animation: 'float 3s ease-in-out infinite'
      }}>
        🐉
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @media (max-width: 768px) {
          body { cursor: auto !important; }
        }
      `}</style>
    </div>
  );
};

export default CursorDragon;