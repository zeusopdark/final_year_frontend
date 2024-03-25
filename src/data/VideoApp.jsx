import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/meeting.css";
import { useNavigate } from "react-router-dom";
const VideoApp = () => {
  const [meetingId, setMeetingId] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "http://localhost:5000/api/appointment/checkMeetingId",
      { meetingId },
      config
    );
    if (data.success) {
      navigate(`/videoCalling?id=${meetingId}`);
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <form className="searchBox" onSubmit={handleSubmit}>
          <input
            type="text"
            name="meetingId"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            placeholder="Enter meetingId"
          />
          <input type="submit" value="Join" />
        </form>
      </div>
    </>
  );
};

export default VideoApp;
