import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/meetdoctors.css";
import doctor1 from "../images/d1.jpg";
import doctor2 from "../images/d2.jpg";
import doctor3 from "../images/d3.jpg";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="carousel"
      >
        <div>
          <img src={doctor1} className="imgCarousal" alt="Doctor 1" />
          <div className="legend">
            <h3>Dr. John Doe</h3>
            <p>Specialization: Cardiologist</p>
            <Link to={"/doctors"} className="btn">
              Book Appointment
            </Link>
          </div>
        </div>
        <div>
          <img src={doctor2} className="imgCarousal" alt="Doctor 2" />
          <div className="legend">
            <h3>Dr. Jane Smith</h3>
            <p>Specialization: Neurologist</p>
            <Link to={"/doctors"} className="btn">
              Book Appointment
            </Link>
          </div>
        </div>
        <div>
          <img src={doctor3} className="imgCarousal" alt="Doctor 3" />
          <div className="legend">
            <h3>Dr. Alex Johnson</h3>
            <p>Specialization: Dermatologist</p>
            <Link to={"/doctors"} className="btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
