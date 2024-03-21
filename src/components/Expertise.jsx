import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/expertise.css";
import expertise from "../images/expertise.png";
const Expertise = () => {
  const data = [
    {
      icon: <FaCheckCircle />,
      title: "Child Care",
      content:
        "Dedicated to providing a safe and nurturing environment for your little ones.",
    },
    {
      icon: <FaCheckCircle />,
      title: "More Services",
      content:
        "Explore a variety of healthcare services tailored to meet your needs.",
    },
    {
      icon: <FaCheckCircle />,
      title: "24 Hour Doctor",
      content:
        "Access timely medical assistance with our 24/7 available healthcare professionals.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Medical Care",
      content:
        "Experience top-notch medical care, ensuring your well-being is our priority.",
    },
  ];
  return (
    <div style={{ marginTop: "8rem", marginBottom: "8rem" }}>
      <h2
        className="expertiseH2"
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "5rem",
          marginBottom: "4rem",
        }}
      >
        Our Expertise
      </h2>
      <div className="expertiseMain">
        <div className="expertise1">
          <img src={expertise} alt="" />
        </div>
        <div className="expertise2">
          {data.map((item, index) => (
            <div key={index} className="expertise2Child">
              <i>{item.icon}</i>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
