import React from "react";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import AppointmentForm from "../components/AppointmentForm";
import MeetDoctors from "../components/MeetDoctors";
import Service from "./Service.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Service val={false} />
      <MeetDoctors />
      <HomeCircles />
      <AppointmentForm />
      <Footer />
    </>
  );
};

export default Home;
