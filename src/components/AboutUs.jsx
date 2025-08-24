import React from "react";
import "./AboutUs.css";
import GarageImage from "../assets/frontView.png";
import Zoom from 'react-reveal/Zoom';

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="about">
                <h1> About Us </h1> <hr/>

     
      <div className="about-container">
         <Zoom>
        <motion.div 
          className="about-img"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={GarageImage} alt="KGN Car Hospital" />
        </motion.div>
        </Zoom>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <Zoom>

          
          <p>
            Welcome to <strong>KGN Car Hospital</strong>, your trusted destination for expert car repair and maintenance services. 
            With years of experience, we provide top-notch solutions for all your vehicle needs, including 
            <strong> engine diagnostics, wiring works, ECM repairs, AC installation, denting, painting, and key programming</strong>.
            Our priority is customer satisfaction. We ensure honesty, reliability, and precision in every service using 
            advanced tools and techniques. Whether it's routine maintenance or complex repairs, we guarantee 
            high-quality work at affordable prices.
            At <strong>KGN Car Hospital</strong>, we offer <strong>fast service, genuine spare parts, and expert guidance</strong> to keep your vehicle in perfect condition. 
            Drive in with confidence – drive out with perfection! 🚗🔧✨
          </p> </Zoom>
        </motion.div>
      </div>
    
    </div>
  );
};

export default About;
