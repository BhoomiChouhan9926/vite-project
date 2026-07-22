import React from "react";
import "./WelcomeCard.scss";

const WelcomeCard = () => {
  return (
    <div className="welcome-card">

      <h1>Welcome Back 👋</h1>

      <p>
        Continue creating beautiful memories with MemoryNest.
      </p>

      <button>
        + Create Scrapbook
      </button>

    </div>
  );
};

export default WelcomeCard;