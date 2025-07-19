import React from "react";
import "./Services.css";
import { Serviceslist } from "./Utils/Serviceslist";
import { motion } from "framer-motion";
import Zoom from 'react-reveal/Zoom';

const Services = () => {
  return (
    <div className="container services" id="services">
    
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="services-header"
      >
        <h2>Our Services</h2>
        <hr />
        <p>👉 Your trusted car repair and maintenance service.</p>
      </motion.div>


      <div className="row">
        <Zoom>
          {Serviceslist.map((service, index) => (
          <motion.div 
            key={service._id}
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="col-md-4 col-sm-6 col-12"
          >
            <div className="service-card">
              <img src={service.image} alt={service.name} className="service-image" />
              <div className="service-info">
                <h5>{service.name}</h5>
                <p>{service.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
        </Zoom>
        
      </div>
      
    </div>
  );
};

export default Services;
