import React from 'react';
import { FaStar, FaStarHalfAlt, FaWrench } from 'react-icons/fa';
import './Testimonials.css';
import Flip from 'react-reveal/Roll';

const testimonialsData = [
  {
    name: 'Sajid Ali',
    service: 'Engine Repair',
    image: 'https://via.placeholder.com/150',
    quote: 'Amazing service! My engine runs like new. Highly recommend KGN Car Hospital!',
    rating: 5,
  },
  {
    name: 'Zishan Raza',
    service: 'Oil Change',
    image: 'https://via.placeholder.com/150',
    quote: 'Fast and affordable oil change. The staff was very friendly and professional.',
    rating: 4.5,
  },
  {
    name: 'Mohshin Ansari',
    service: 'Brake Repair',
    image: 'https://via.placeholder.com/150',
    quote: 'Excellent brake service! I feel much safer driving now.',
    rating: 4,
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
