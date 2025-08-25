import React from 'react';
import { FaStar, FaStarHalfAlt, FaWrench } from 'react-icons/fa';
import './Testimonials.css';
import Flip from 'react-reveal/Roll';

const testimonialsData = [
  {
    name: 'Vishal Kr Gupta',
    service: 'Engine Repair',
    quote: 'Amazing service! My engine runs like new. Highly recommend KGN Car Hospital!',
    rating: 5,
  },
  {
    name: 'Mukesh Kr Thakur',
    service: 'ECM Works',
    quote: 'Quick and reliable ECM work done with great professionalism. My car runs smoothly now.',
    rating: 4.5,
},
{
    name: 'Ankit Sahu',
    service: 'Key Installation',
    quote: 'Excellent key generation and installation service! Works perfectly without any issues.',
    rating: 4.8,
},
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" id='testimonials'>
      <h3 className="title">
        <FaWrench /> Customer Testimonials
      </h3>
      <div className="carousel">
        <Flip>

     
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="carousel-item">
            <div className="testimonial-card">
              {/* <img
                src={testimonial.image}
                className="testimonial-image"
                alt={testimonial.name}
              /> */}
              <h5 className="testimonial-name">{testimonial.name}</h5>
              <h6 className="testimonial-service">Service: {testimonial.service}</h6>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="rating-icon">
                    {i < Math.floor(testimonial.rating) ? <FaStar /> : <FaStarHalfAlt />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}</Flip>
      </div>
    </div>
  );
};

export default Testimonials;
