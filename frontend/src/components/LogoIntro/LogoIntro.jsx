import React, { useState, useEffect } from 'react';
import './LogoIntro.css';

const LogoIntro = ({ onComplete }) => {
  const [stage, setStage] = useState('show');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage('fadeout');
    }, 2500);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`logo-intro ${stage}`}>
      <div className="logo-content">
        <h1 className="logo-text">Griflan</h1>
        <p className="logo-subtitle">Strategy-Led Design</p>
      </div>
    </div>
  );
};

export default LogoIntro;