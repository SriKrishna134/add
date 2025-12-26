import React, { useEffect, useRef, useState } from 'react';
import './HeroScrollVideo.css';

const HeroScrollVideo = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress
      const scrolled = -rect.top;
      const maxScroll = containerHeight - viewportHeight;
      
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale: starts at 0.5, ends at 1
  const scale = 0.5 + (scrollProgress * 0.5);
  // Calculate opacity: stays mostly visible
  const opacity = 1 - (scrollProgress * 0.2);
  // Calculate border radius: starts rounded, becomes sharp
  const borderRadius = 20 - (scrollProgress * 15);

  return (
    <div ref={containerRef} className="hero-scroll-container">
      <div className="hero-sticky-wrapper">
        <div 
          className="hero-video-frame"
          style={{
            transform: `scale(${scale})`,
            opacity: opacity,
            borderRadius: `${borderRadius}px`
          }}
        >
          {/* Replace with your actual video or image */}
          <video 
  className="hero-media"
  autoPlay 
  muted 
  loop 
  playsInline
>
  <source src="/snns.mp4" type="video/mp4" />    
</video>
          
          {/* Uncomment below to use video instead */}
          {/* 
          <video 
            className="hero-media"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video>
          */}
        </div>
      </div>
    </div>
  );
};

export default HeroScrollVideo;