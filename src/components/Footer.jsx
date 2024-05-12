import React from "react";
import "../styles/footer.css";
import footerImg from "../images/footer.png";
import { FiMessageSquare, FiMapPin, FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <footer
      className="pt-100 pb-70"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container" style={{ marginLeft: "2rem" }}>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="footer-item">
              <div className="footer-contact pe-2">
                <h3 className="myhead">Contact Us</h3>
                <ul>
                  <li>
                    <i className="icofont">{<FiMessageSquare />}</i>
                    <a href="mailto:info@disin.com">info@disin.com</a>
                    <a href="mailto:hello@disin.com">hello@disin.com</a>
                  </li>
                  <li>
                    <i className="icofont">{<FiPhone />}</i>
                    <a href="tel:+07554332322">Call: +07 554 332 322</a>
                    <a href="tel:+236256256365">Call: +236 256 256 365</a>
                  </li>
                  <li style={{ color: "white" }}>
                    <i className="icofont">{<FiMapPin />}</i>210-27 Quadra,
                    Market Street, Victoria Canada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="footer-item">
              <div className="footer-quick">
                <h3 className="myhead">Quick Links</h3>
                <ul>
                  <li>
                    <a href="/about/">About us</a>
                  </li>
                  <li>
                    <a href="/about/">Blog</a>
                  </li>
                  <li>
                    <a href="/blog-details/">Our Expertise</a>
                  </li>
                  <li>
                    <a href="/faq/">Faq</a>
                  </li>
                  <li>
                    <a href="/doctor/">Doctors</a>
                  </li>
                  <li>
                    <a href="/contact/">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-quick">
                <h3 className="myhead">Our Services</h3>
                <ul>
                  <li>
                    <a href="/service-details/">Dental Care</a>
                  </li>
                  <li>
                    <a href="/service-details/">Cardiology</a>
                  </li>
                  <li>
                    <a href="/service-details/">Hijama Therapy</a>
                  </li>
                  <li>
                    <a href="/service-details/">Massage Therapy</a>
                  </li>
                  <li>
                    <a href="/service-details/">Ambluance Sevices</a>
                  </li>
                  <li>
                    <a href="/service-details/">Medicine</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3" style={{ marginRight: "2rem" }}>
            <div className="footer-item">
              <div className="footer-feedback">
                <h3 className="myhead">Feedback</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="your_message"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-left">
                    <button type="submit" className="btn feedback-btn">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
