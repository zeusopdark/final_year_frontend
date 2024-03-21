import React from "react";
import "../styles/meetdoctors.css";
import d1 from "../images/d1.jpg";
import d2 from "../images/d2.jpg";
import d3 from "../images/d3.jpg";

const MeetDoctors = () => {
  return (
    <div className="mainDoc">
      <h2
        className="docHeading doctorH2"
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "5rem",
          marginBottom: "4rem",
        }}
      >
        Meet Ours Doctors
      </h2>
      <div className="main1">
        <div className="main2">
          <div className="doctor-item">
            <div className="doctor-top ">
              <img src={d1} alt="Doctor" className="" />
              <button class="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div class="text">Book Appointment</div>
              </button>
            </div>
            <div className="doctor-bottom">
              <h3>
                <a href="/doctor-details/">Dr. Babatunde</a>
              </h3>
              <span>Mental Health</span>
            </div>
          </div>
        </div>

        <div className="main2">
          <div className="doctor-item">
            <div className="doctor-top">
              <img src={d2} alt="Doctor" className="" />
              <button class="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div class="text">Book Appointment</div>
              </button>
            </div>
            <div className="doctor-bottom">
              <h3>
                <a href="/doctor-details/">Dr. Addision Smith</a>
              </h3>
              <span>Neurosurgeon</span>
            </div>
          </div>
        </div>

        <div className="main2">
          <div className="doctor-item">
            <div className="doctor-top">
              <img src={d3} alt="Doctor" className="" />
              <button class="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div class="text">Book Appointment</div>
              </button>
            </div>
            <div className="doctor-bottom">
              <h3>
                <a href="/doctor-details/">Dr. Sarah Tylor</a>
              </h3>
              <span>Dental Surgeon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetDoctors;
