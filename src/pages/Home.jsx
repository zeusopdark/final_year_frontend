import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import Service from "../components/service/servicelist"
import { useSelector } from "react-redux";

import FaqList from "../components/Faq/FaqList";
import image from "../images/healt.avif";

import "../styles/home.css"


const Home = () => {
  const user=useSelector((state)=>state.root);
  console.log(user);
  return (
    <>
    <Navbar />
    
  
  <Hero />
    <AboutUs />
    <HomeCircles />
  
    <Service />

    {/* <section className="section">
      <div className="container">
        <div className="flex-container">
          <div className="text-container">
            <h2 className="heading">
              Get Virtual Treatment <br />
              any time.
            </h2>
            <ul className="list">
              <li className="list-item">1. Schedule appointment directly.</li>
              <li className="list-item">
                2. Search for your Doctor here, and contact their office.
              </li>
              <li className="list-item">
                3. View our Doctors who are accepting new patients, and use the scheduling
                tool to schedule your appointment with the Doctor.
              </li>
            </ul>
            <Link to="/">
              <button className="button">Learn More</button>
            </Link>
          </div>

          <div className="image-container">
            <img src={"img"} alt="" className="image" />

            <div className="overlay-container">
              <div className="overlay-content">
                <div className="date-and-time">
                  <div className="date-time-item">
                    <p className="date-time-text">Tue , 25</p>
                    <p className="date-time-text">10:00 AM</p>
                  </div>
                  <span className="video-icon">
                    <img src={""} alt="" />
                  </span>
                </div>

                <div className="consultation-type">Consultation</div>

                <div className="consultant-info">
                  <img src={""} alt="" className="avatar-icon" />
                  <h4 className="consultant-name">XYZ</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}


    <section>
        <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "50px" }}>
      <div style={{ width: "50%", display: "none", md: { display: "block" } }}>
        <img src={image} alt="faqImage" style={{ width: "100%" }} />
      </div>

      <div style={{ width: "100%", md: { width: "50%" } }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Most questions by beloved patients</h2>
        <FaqList />
      </div>
    </div>
        </div>
      </section>
    {/* <Contact /> */}
    
    <Footer />
  </>
  
  );
};

export default Home;
