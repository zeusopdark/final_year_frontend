import React from "react";
import image from "../images/healt.avif";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        You came to the right place. Get support for stress, family issues, life balance from your home.

            Consulting a healthcare professional, ordering lab tests and improving your health and wellbeing, all can be done 24/7 with DocTime!
        </p>
        <button className="btn">Request an Appointment</button>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
