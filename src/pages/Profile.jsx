import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import axios from "axios";
import toast from "react-hot-toast";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import fetchData from "../helper/apiCall";
import jwt_decode from "jwt-decode";
import Navbar from "../components/Navbar";
const url = process.env.REACT_APP_DOMAIN;
function Profile() {
  const { userId } = jwt_decode(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [file, setFile] = useState("");
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    mobile: "",
    gender: "neither",
    address: "",
    password: "",
    confpassword: "",
  });

  const getUser = async () => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(`${url}/api/user/getuser/${userId}`);
      setFormDetails({
        ...temp,
        password: "",
        confpassword: "",
        mobile: temp.mobile === null ? "" : temp.mobile,
        age: temp.age === null ? "" : temp.age,
      });
      dispatch(setLoading(false));
      setFile(temp.avatar.url);
    } catch (error) {
      // dispatch(setLoading(false));
      console.log("There is an error", error);
    }
  };
  console.log(loading);

  useEffect(() => {
    getUser();
  }, [dispatch]);

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
      const {
        firstname,
        lastname,
        email,
        age,
        mobile,
        address,
        gender,
        password,
        confpassword,
      } = formDetails;

      if (!email) {
        return toast.error("Email should not be empty");
      } else if (firstname.length < 3) {
        return toast.error("First name must be at least 3 characters long");
      } else if (lastname.length < 3) {
        return toast.error("Last name must be at least 3 characters long");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      } else if (password !== confpassword) {
        return toast.error("Passwords do not match");
      }
      await toast.promise(
        axios.put(
          "http://localhost:5000/api/user/updateprofile",
          {
            firstname,
            lastname,
            age,
            mobile,
            address,
            gender,
            email,
            password,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          pending: "Updating profile...",
          success: "Profile updated successfully",
          error: "Unable to update profile",
          loading: "Updating profile...",
        }
      );

      setFormDetails({ ...formDetails, password: "", confpassword: "" });
    } catch (error) {
      return toast.error("Unable to update profile");
    }
  };

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="profilebg">
          <Navbar />
          <form onSubmit={formSubmit} className="profileform profile-content">
            <div className="mainProfile">
              <div className="mainprofilePart1">
                <img src={file} alt="" />
              </div>
              <div className="mainProfilePart2">
                <div className="mainpart2child1">
                  <div class="input-block">
                    <input
                      type="text"
                      name="firstname"
                      value={formDetails.firstname}
                      onChange={inputChange}
                      required
                      spellcheck="false"
                    />
                    <span class="placeholder">First Name</span>
                  </div>
                  <div class="input-block">
                    <input
                      type="text"
                      name="lastname"
                      value={formDetails.lastname}
                      onChange={inputChange}
                      required
                      spellcheck="false"
                    />
                    <span class="placeholder">Last Name</span>
                  </div>
                  <div class="input-block">
                    <input
                      type="email"
                      name="email"
                      value={formDetails.email}
                      onChange={inputChange}
                      required
                      spellcheck="false"
                    />
                    <span class="placeholder">Email</span>
                  </div>
                  <div class="input-block">
                    <select
                      name="gender"
                      id="gender"
                      style={{ paddingTop: "0.3rem", fontWeight: "500" }}
                      value={formDetails.gender}
                      onChange={inputChange}
                      required
                    >
                      <option value="neither">Prefer not to say</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <span class="placeholder">Gender</span>
                  </div>
                </div>
                <div className="mainpart2child2">
                  <div class="input-block">
                    <input
                      type="text"
                      name="age"
                      value={formDetails.age}
                      onChange={inputChange}
                      required
                      spellcheck="false"
                    />
                    <span class="placeholder">Age</span>
                  </div>
                  <div class="input-block">
                    <input
                      type="text"
                      name="mobile"
                      value={formDetails?.mobile}
                      onChange={inputChange}
                      required
                      spellcheck="false"
                    />
                    <span class="placeholder">Mobile Number</span>
                  </div>
                  <div class="input-block">
                    <input
                      type="password"
                      name="password"
                      value={formDetails.password}
                      onChange={inputChange}
                      required
                      spellcheck="false"
                    />
                    <span class="placeholder">Password</span>
                  </div>
                  <div class="input-block">
                    <input
                      type="password"
                      name="confpassword"
                      value={formDetails.confpassword}
                      onChange={inputChange}
                      required
                      spellcheck="false"
                    />
                    <span class="placeholder">Confirm Password</span>
                  </div>
                </div>
              </div>
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
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Profile;
