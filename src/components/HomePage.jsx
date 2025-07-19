import React from "react";
import "./HomePage.css";
import NavBar from "./navBar";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const HomePage = () => {
  return (
    <div className="home-container" id="home">
      <NavBar />
      <Zoom>
        <h1>Welcome to KGN Car Hospital</h1>
        <p>We have best Workers in the Ambikapur.</p>
        <p>Your trusted car repair and maintenance service.</p>
      </Zoom>

      <Bounce>
         <a href="https://wa.me/918602374249" target="_blank" rel="noopener noreferrer">
         <button className="enquiry-button" role="button">
          {" "}
          Enquiry{" "}
        </button>
        </a>
        
      </Bounce>
    </div>
  );
};

export default HomePage;
