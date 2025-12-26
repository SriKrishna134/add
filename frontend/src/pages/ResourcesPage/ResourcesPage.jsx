import React, { forwardRef } from 'react';
import './ResourcesPage.css';

const resources = [
  { title: '📄 Term Sheet Sample', file: '/assets/term-sheet.pdf' },
  { title: '🛡️ Investor Rights Summary', file: '/assets/investor-rights.pdf' },
  { title: '📘 Whitepaper 2024', file: '/assets/whitepaper.pdf' },
  { title: '📰 Blog: How We Work', file: '/assets/blog-post.pdf' },
];

const ResourcesPage = forwardRef(({ dataColor }, ref) => {
  return (
    <section id="resources" className="resources-section" data-aos="fade-up">
      <h2 className="resources-title">Resources</h2>
      <p className="resources-subtext">Access legal docs, investor terms, and insights anytime.</p>

      <div className="resources-grid">
        {resources.map((res, index) => (
          <a
            key={index}
            href={res.file}
            target="_blank"
            rel="noopener noreferrer"
            className={`resource-card hover-style-${(index % 4) + 1}`}
          >
            <div className="resource-content">
              <h3>{res.title}</h3>
              <p>Download</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
});
ResourcesPage.displayName = "resources";

export default ResourcesPage;