import React from "react";
import "./CTA.scss";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">

        <h2>
          <span className="heart">❤️</span> Start Preserving Your Memories Today
        </h2>

        <p>
          Don't let your beautiful moments fade away. Create your first
          digital scrapbook in just a few clicks.
        </p>

        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Explore</button>
        </div>

      </div>
    </section>
  );
};

export default CTA;