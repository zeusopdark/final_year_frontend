import React from "react";
//import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/service.css";
import {
  FaRibbon,
  FaBaby,
  FaHeartbeat,
  FaBrain,
  FaFire,
  FaUserMd,
  FaVideo,
  FaCalendarCheck,
} from "react-icons/fa";

const Service = ({ val, showAllCards }) => {
  const servicesData = [
    {
      icon: <FaUserMd />,
      title: "Expert Doctor",
      data: "Our team of experienced doctors is committed to providing compassionate and patient-centered care.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Easy Appointment",
      data: "Schedule appointments effortlessly with our user-friendly booking system, designed for your convenience.",
    },
    {
      icon: <FaVideo />,
      title: "Online Consultation",
      data: "Experience the convenience of our video consultation facility, available for all appointments.",
    },
    {
      icon: <FaRibbon />,
      title: "Cancer Care",
      data: "Comprehensive care for cancer patients. Our team of oncologists and specialists work together to provide.",
    },
    {
      icon: <FaBaby />,
      title: "Labor and Delivery",
      data: "Experience the joy of childbirth with our expert obstetricians and maternity care team. From prenatal care.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Heart and Vascular",
      data: "Our cardiology and vascular teams are dedicated to managing heart and vascular conditions,and cardiac.",
    },
    {
      icon: <FaBrain />,
      title: "Mental Health",
      data: "Promoting mental well-being through counseling, therapy, and psychiatric care. Our mental health professionals.",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      data: "Specialized care for neurological disorders, including stroke, epilepsy, and neurodegenerative diseases.",
    },
    {
      icon: <FaFire />,
      title: "Burn Treatment",
      data: "Expert care for burn injuries, from initial assessment to comprehensive treatment. Our burn care team focuses.",
    },
  ];
  const displayedServices = showAllCards
    ? servicesData
    : servicesData.slice(0, 4);

  return (
    <div style={{ marginBottom: "6rem" }}>
      {val && <Navbar />}
      <>
        <h2
          className="serviceH2"
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "5rem",
            marginBottom: "4rem",
          }}
        >
          Our Platform Services
        </h2>
        <div className="mainImp">
          {displayedServices.map((data) => (
            <div className="main2Imp" key={data.title}>
              <i className="iconReq">{data.icon}</i>
              <h3>{data.title}</h3>
              <p className="dataText">{data.data}</p>
              <button className="serButton">Learn More..</button>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Service;
