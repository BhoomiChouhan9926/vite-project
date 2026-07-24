import React from "react";
import "./WelcomeCard.scss";
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button.jsx'
const WelcomeCard = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-card">

      <h1>Welcome Back 👋</h1>

      <p>
        Continue creating beautiful memories with MemoryNest.
      </p>

      {/* <button>
        + Create Scrapbook
      </button> */}
      <Button text = "+ Create Scrapbook"
      onClick ={ ()=>{navigate('/create-scrapbook')}}/>

    </div>
  );
};

export default WelcomeCard;