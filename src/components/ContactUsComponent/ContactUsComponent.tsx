import { FunctionComponent } from "react";

import "./ContactUsComponent.scss";

import Logo from "../../assets/images/Logo_contact_Us.svg";
import Neelkamal_Logo from "../../assets/images/slides/Slide-7.jpeg";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const ContactUsComponent: FunctionComponent = () => {
  return (
    <div className="main-contact-us-container" id="contact-us">
      <h2 className="heading-contact">Contact Us</h2>
      <div className="contact-us-container" id="contact-us">
        <div className="contact-info">
          <div className="logo-container">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="logo">
              <img src={Neelkamal_Logo} alt="Neelkamal_Logo" />
            </div>
          </div>
          <h2>Bhagwati Paper Trading Company</h2>
          {/* <p>
            <strong>Phone:</strong> +91 7905107864
          </p> */}
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+917905107864" className="phone-link">
              +91 7905107864
            </a>
          </p>
          <p>
            <strong>Address:</strong> 46 B, Chah Chand, Zero Road, Prayagraj,
            Uttar Pradesh 211003
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/bhagwati_paper_trading_company">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/BhagwatiPaperTradingCo/">
              <FaFacebook />
            </a>
            {/* <a href="#">
              <FaLinkedin />
            </a> */}
          </div>
          <footer className="footer">
            &copy; {new Date().getFullYear()} Bhagwati Paper Trading Company.
            All rights reserved.
          </footer>
        </div>
        {/* <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="query">Query</label>
              <textarea
                id="query"
                name="query"
                rows={5}
                required
                placeholder="Enter your query"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUsComponent;
