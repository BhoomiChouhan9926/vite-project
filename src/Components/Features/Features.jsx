import React from "react";
import './Features.scss'

const Features = () => {
  return (
    <section className="features">

      <div className="features-heading">
        <h2>Why Choose MemoryNest?</h2>

        <p>
          Everything you need to preserve your beautiful memories
          in one place.
        </p>
      </div>

      <div className="features-container">

        <div className="feature-card">
          <div className="icon">📸</div>

          <h3>Memories</h3>

          <p>
            Save your favorite moments with beautiful photos.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">💌</div>

          <h3>Letters</h3>

          <p>
            Write heartfelt letters to your loved ones.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">📝</div>

          <h3>Notes</h3>

          <p>
            Keep all your important notes together.
          </p>
        </div>
        <div className="feature-card">
          <div className="icon">📝</div>

          <h3>Notes</h3>

          <p>
            Keep all your important notes together.
          </p>
        </div>

       </div>
      </section>
  )
}

export default  Features;