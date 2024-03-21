import React from "react";
import "../styles/hero.css";
import docHero from "../images/docMainImp.png";
import {
  FaSearch,
  FaUserMd,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Feel Better About Finding HealthCare</h1>
            <p>
              Experience the future of healthcare with our remote platform.
              Connect with top-tier healthcare professionals from the comfort of
              your home.
            </p>

            <div className="hero-text-btns">
              <a href="#">
                <i className="fa-solid fa-magnifying-glass">
                  <FaUserMd size={15} />
                </i>{" "}
                Find Doctor's
              </a>
              <a href="#">
                <i className="fa-solid fa-check">
                  <FaCalendarAlt size={15} />
                </i>{" "}
                Book Appointment
              </a>
            </div>
          </div>

          <div className="hero-img">
            <img alt="" src={docHero} />
          </div>
        </div>
      </section>
      <div className="appointment-search-container">
        <h3>Find Best HealthCare</h3>
        <form className="appointment-search">
          <div className="appo-search-box">
            <i className="fa-solid fa-magnifying-glass">
              <FaSearch size={15} />
            </i>
            <input type="text" placeholder="Search Doctor Here or For Advice" />
          </div>

          <div className="appo-search-box">
            <i className="fa-solid fa-location-dot">
              <FaMapMarkerAlt size={15} />
            </i>
            <input type="text" placeholder="Set Your Location" />
          </div>

          <button>
            <i className="fa-solid fa-magnifying-glass">
              <FaSearch size={15} />
            </i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Hero;
