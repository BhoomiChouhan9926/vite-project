import React from "react";
import "./Preview.scss";
import previewImg from "../../assets/preview1.png"; // apni image use kar lena

const Preview = () => {
  return (
    <section className="preview">

      <div className="preview-left">

        <span className="preview-tag">
          📖 Beautiful Scrapbooks
        </span>

        <h2>
          See Your Memories
          <br />
          Come Alive ❤️
        </h2>

        <p>
          Organize your photos, letters, notes and special moments
          into one beautiful digital scrapbook that you can cherish
          forever.
        </p>

        <button className="preview-btn">
          Start Creating
        </button>

      </div>

      <div className="preview-right">

        <img
          src={previewImg}
          alt="Preview"
        />

      </div>

    </section>
  );
};

export default Preview;