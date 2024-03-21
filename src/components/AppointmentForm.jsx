import React from "react";
import "../styles/AppointmentForm.css";
import appointmentFormDoc from "../images/appointmentFormDoc.jpg";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHospital,
  FaUserMd,
} from "react-icons/fa";
const AppointmentForm = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${appointmentFormDoc})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "2rem",
        marginBottom: "7rem",
        marginTop: "7rem",
      }}
    >
      <div className="mainForm">
        <div className="appointment-area">
          <div className="container-fluid p-0">
            <div className="appointment-item">
              <h2>Book your appointment</h2>
              <span>We will confirm your appointment within 2 hours</span>
              <div className="appointment-form">
                <form>
                  <div className="AppointmentRow">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="icofont-business-man-alt-1">
                          <FaUser />
                        </i>
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="icofont-ui-message">
                          <FaEnvelope />
                        </i>
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="icofont-ui-call">
                          <FaPhone />
                        </i>
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="icofont-hospital">
                          <FaHospital />
                        </i>
                        <label>Services</label>
                        <select
                          className="form-control"
                          style={{
                            paddingLeft: "6.8rem",
                            paddingTop: "0.4rem",
                          }}
                          id="exampleFormControlSelect1"
                        >
                          <option>Dental Care</option>
                          <option>Neurology</option>
                          <option>Cardiology</option>
                          <option>Pathology</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="icofont-doctor">
                          <FaUserMd />
                        </i>
                        <label>Doctor</label>
                        <select
                          className="form-control"
                          style={{
                            paddingLeft: "3rem",
                            paddingTop: "0.4rem",
                          }}
                          id="exampleFormControlSelect2"
                        >
                          <option>Choose Your Doctor</option>
                          <option>John Smith</option>
                          <option>Sarah Taylor</option>
                          <option>Stevn King</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="icofont-business-man">
                          <FaUser />
                        </i>
                        <label>Age</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Age"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn appointment-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
