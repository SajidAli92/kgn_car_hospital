import React, { useState } from "react";
import "./Contactus.css";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-us-container" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-details-content">
        <div className="contact-item">
          <div className="logo">
            <CiLocationOn color="orangered" size={50} />
          </div>
          <h3>Our Office Address</h3>
          <p>Kharsiyanaka, Ambikapur, 497001</p>
        </div>

        <div className="contact-item">
          <div className="logo">
            <FaLocationArrow color="orangered" size={50} />
          </div>
          <h3>General Enquiries</h3>
          <p>kgncarac@gmail.com</p>
        </div>
        <div className="contact-item">
          <div className="logo">
            {" "}
            <MdOutlineAddIcCall color="orangered" size={50} />{" "}
          </div>
          <h3>Call Us</h3>
          <p>+91 9826593763</p>
          <p>+91 8602374249</p>
        </div>
        <div className="contact-item">
          <div className="logo">
            {" "}
            <FaClock color="orangered" size={50} />{" "}
          </div>
          <h3>Our Office Hours</h3>
          <p>Wed-Mon: 09:00 AM - 08:00 PM</p>
        </div>
      </div>

      <div className="contact-us-content">
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group1">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group2">
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {isSubmitted && (
          <div className="thank-you-message">
            <h3>Thank you for reaching out!</h3>
            <p>We will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
