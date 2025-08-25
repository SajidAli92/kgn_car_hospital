import React, { useRef, useState } from "react";
import "./Contactus.css";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
)

      .then(
        () => {
          setLoading(false);
          setIsSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message: " + error.text);
        }
      );
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
            <MdOutlineAddIcCall color="orangered" size={50} />
          </div>
          <h3>Call Us</h3>
          <p>+91 9826593763</p>
          <p>+91 8602374249</p>
        </div>

        <div className="contact-item">
          <div className="logo">
            <FaClock color="orangered" size={50} />
          </div>
          <h3>Our Office Hours</h3>
          <p>Wed-Mon: 09:00 AM - 08:00 PM</p>
        </div>
      </div>

      <div className="contact-us-content">
        <form className="contact-us-form" ref={formRef} onSubmit={sendEmail}>
          <div className="form-group">
            <div className="form-group1">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="number" placeholder="Phone" required />
            </div>
          </div>

          <div className="form-group2">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
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
