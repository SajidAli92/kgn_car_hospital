import React from 'react'

import './App.css'
import HomePage from './components/HomePage';
import Services from './components/Services';
import About from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactUs from './components/Contactus';
import Footer from './components/Footer';
import Map from './components/Map';

import ScrollToTop from "react-scroll-to-top";
import ParticlesComponent from './components/particles';

function App() {
  

  return (
    <>
      {/* <ParticlesComponent id="particles"/> */}
      <HomePage/>
      <Services/>
      <About/>
      <Gallery/>
      <Testimonials/>
      <ContactUs/>
      <Map/>
      <Footer/>

      {/* <ScrollToTop smooth color="#f29f67" style={{backgroundColor: "#1e1e2c", borderRadius: "80px" , right: "50px" }}/> */}
      <ScrollToTop smooth  style={{width: "65px", height: "45px", backgroundColor:"#ff5a5f", borderRadius: "80px", }}/>
    </>
  )
}

export default App
