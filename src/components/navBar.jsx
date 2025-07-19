import React, { useState } from 'react';
import "./navBar.css";
import { Link } from 'react-scroll';
import { FiMenu, FiX } from "react-icons/fi";
import GarageLogo from "../assets/KGN_Car_Hospital_logo.png";

const NavBar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='navbar'>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
        
        <div className='garagelogo'>
          <img src={GarageLogo} alt="logo" className="logo-image" />
        </div>

        <div className={`nav-items ${isOpen ? "open" : ""}`}>
          <div className='nav-item'>
            <div className='nav-link'> 
              <Link to="home" spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}> Home </Link>
            </div>
            <div className='nav-link'> 
              <Link to='services' spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}> Services </Link>
            </div>
            <div className='nav-link'> 
              <Link to='about' spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}> About Us </Link>
            </div>
            <div className='nav-link'> 
              <Link to='gallery' spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}> Gallery </Link>
            </div>
            <div className='nav-link'> 
              <Link to='testimonials' spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}> Testimonials </Link>
            </div>
            <div className='nav-link'> 
              <Link to='contact' spy={true} smooth={true} offset={-100} duration={1000} onClick={toggleMenu}> Contact Us </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;