import React, { forwardRef } from 'react';
import './HowItWorks.css';

const HowItWorks = forwardRef(({ dataColor }, ref) => {
  return (
    <section
      ref={ref}
      data-color={dataColor}
      id="howitworks"
      className="howitworks-section"
      data-aos="zoom-in-up"
    >
      <h2 className="howitworks-title">How It Works</h2>
      <p className="howitworks-subtext">
        Understand our structured and transparent process for both Startups and Investors.
      </p>

      <div className="howitworks-container">
        <div className="howitworks-box slide-in-left">
          <h3 className="titleblue">🚀 Startups & SMEs</h3>
          <ul>
            <li>Application & Onboarding</li>
            <li>Financial / Legal Due Diligence</li>
            <li>Investment Setup (CCPS / CCD)</li>
            <li>Disbursement via Escrow</li>
            <li>Updates & Exit (Buyback / Conversion)</li>
          </ul>
        </div>

        <div className="howitworks-box slide-in-right">
          <h3 className="titleorange">💰 HNI Investors</h3>
          <ul>
            <li>Access Request</li>
            <li>Deal Discovery Dashboard</li>
            <li>Contracts, Rights & Scoring</li>
            <li>Exit via Buyback / Conversion</li>
            <li>Due Diligence</li>
            <li>Invest & Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";

export default HowItWorks;
