import React from "react";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <section className="how-it-works">

      <div className="how-heading">
        <h2>How MemoryNest Works</h2>
        <p>
          Create your digital scrapbook in just a few simple steps.
        </p>
      </div>

      <div className="steps-container">

        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-icon">👤</div>
          <h3>Create Account</h3>
          <p>Register and securely log in to MemoryNest.</p>
        </div>

        <div className="arrow">→</div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-icon">📖</div>
          <h3>Create Scrapbook</h3>
          <p>Create your personal scrapbook and choose a theme.</p>
        </div>

        <div className="arrow">→</div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-icon">📸</div>
          <h3>Add Memories</h3>
          <p>Upload photos, write letters and save notes.</p>
        </div>

        <div className="arrow">→</div>

        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-icon">❤️</div>
          <h3>Relive Forever</h3>
          <p>Open your scrapbook anytime and revisit your memories.</p>
        </div>

      </div>

    </section>
  );
};

export default HowItWorks;