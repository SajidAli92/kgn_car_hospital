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
        <p>Best Workers in Ambikapur, Surguja, C.G (497001).</p>
        <p>Your trusted car repair and maintenance service.</p>
      </Zoom>

      <Bounce>
        <div className="button-group">
          <a href="https://wa.me/918602374249" target="_blank" rel="noopener noreferrer">
            <button className="home-btn enquiry-btn">Enquiry</button>
          </a>
          <a href="tel:+918602374249" target="_blank" rel="noopener noreferrer">
            <button className="home-btn call-btn">Call</button>
          </a>
          <a href="https://www.youtube.com/channel/UCVvZkxtZ0P3PMnqm3qAbg7g" target="_blank" rel="noopener noreferrer">
            <button className="home-btn youtube-btn">YouTube</button>
          </a>
        </div>
      </Bounce>
    </div>
  );
};

export default HomePage;
