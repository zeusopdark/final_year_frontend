import React from "react";
import image from "../images/heroimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            You came to the right place. Get support for stress, family issues, life balance from your home.

Consulting a healthcare professional, ordering lab tests and improving your health and wellbeing, all can be done 24/7 with DocTime!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
