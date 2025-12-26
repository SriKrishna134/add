import React, { forwardRef } from 'react';
import './InfoPage.css';

const InfoPage = forwardRef(({ dataColor }, ref) => {
  return (
    <section id='info' className="info-section" data-aos="fade-up">
      <div className="info-container">
        <h2 className="info-title">How CredGrow Works</h2>
        <p className="info-description">
          CredGrow connects profitable Indian SMEs and Startups with High Net-Worth Individuals (HNIs) and Family Offices through structured investment instruments like CCPS and CCD.
        </p>

        <div className="info-steps">
          <div className="info-step">
            <h3> For Startups & SMEs</h3>
            <ul>
              <li>Apply & get onboarded</li>
              <li>Due diligence & legal structuring</li>
              <li>Milestone-based disbursement via escrow</li>
              <li>Regular updates and exit strategy</li>
            </ul>
          </div>

          <div className="info-step">
            <h3> For Investors</h3>
            <ul>
              <li>Access high-quality deal flow</li>
              <li>Invest securely with legal protection</li>
              <li>Track performance via dashboards</li>
              <li>Exit through buyback/conversion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});
InfoPage.displayName = "info";

export default InfoPage;
