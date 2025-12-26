import React, { useEffect, useRef, useState } from 'react';
import FallingTextSection from '../../components/FallingTextSection/FallingTextSection';
import WorkShowcase from '../../components/WorkShowcase/WorkShowcase';
import StatsSection from '../../components/StatsSection/StatsSection';
import './ExplorePage.css';

const ExplorePage = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = rect.height;
      const scrolled = -rect.top;
      
      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, scrolled / (heroHeight * 0.8)));
      setScrollProgress(progress);

      // Frame-by-frame video scrubbing
      if (videoRef.current && videoRef.current.duration) {
        const time = progress * videoRef.current.duration;
        videoRef.current.currentTime = time;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate video scale (starts at 0.6, zooms to 1)
  const videoScale = 0.6 + (scrollProgress * 0.4);
  const videoOpacity = 0.7 + (scrollProgress * 0.3);

  return (
    <div className="explore-page">
      {/* Hero Section: Text Left, Video Right */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-container">
          {/* Left Side - Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Build brands<br />
              that <span className="highlight">shine</span>
            </h1>
            <p className="hero-subtitle">
              Strategy-led design studio creating<br />
              original brands for ambitious partners
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Project</button>
              <button className="btn-secondary">View Work</button>
            </div>
          </div>

          {/* Right Side - Video with Zoom Effect */}
          <div className="hero-video-container">
            <div 
              className="video-wrapper"
              style={{
                transform: `scale(${videoScale})`,
                opacity: videoOpacity
              }}
            >
              {/* Replace with your actual video */}
              <video
                ref={videoRef}
                className="hero-video"
                muted
                playsInline
                preload="auto"
                poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
              >
                {/* Add your video source */}
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
              
              {/* Fallback Image if no video */}
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
                alt="Hero Visual"
                className="hero-fallback"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Falling Text Section */}
      <FallingTextSection />

      {/* Work Showcase */}
      <WorkShowcase />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to build something amazing?</h2>
          <p>Let's create a brand that shines together.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Join our workshop</button>
            <button className="btn-secondary">Let's Connect</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;