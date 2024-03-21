import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import jwt_decode from "jwt-decode";
import fetchData from "../helper/apiCall";
import Navbar from "../components/Navbar";
import logDoc from "../images/logDoc.png";
const domain = process.env.REACT_APP_DOMAIN;
function Login() {
  const alreadyLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = formDetails;
      if (!email || !password) {
        return toast.error("Input field should not be empty");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      }
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await toast.promise(
        axios.post(
          `${domain}/user/login`,
          {
            email,
            password,
          },
          config
        ),
        {
          pending: "Logging in...",
          success: "Login successfully",
          error: "Unable to login user",
          loading: "Logging user...",
        }
      );
      localStorage.setItem("token", data.token);
      dispatch(setUserInfo(jwt_decode(data.token).userId));

      getUser(jwt_decode(data.token).userId);
    } catch (error) {
      return error;
    }
  };

  const getUser = async (id) => {
    try {
      const temp = await fetchData(`${domain}/user/getuser/${id}`);
      dispatch(setUserInfo(temp));
      return navigate("/");
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    if (alreadyLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          margin: "0",
        }}
      >
        <section className="register-section">
          <div className="mainLoS2">
            <img src={logDoc} alt="" />
          </div>
          <div className="mainLoS">
            <h2 className="" style={{ fontSize: "2rem" }}>
              Sign In
            </h2>
            <form onSubmit={formSubmit} className="register-form">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formDetails.email}
                onChange={inputChange}
              />
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={formDetails.password}
                onChange={inputChange}
              />
              <button className="buttonLogin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>

                <div className="text" type="submit">
                  Submit
                </div>
              </button>
            </form>
            <p>
              Not a user?{" "}
              <NavLink className="" to={"/register"}>
                Register
              </NavLink>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
