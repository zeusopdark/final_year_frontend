import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  const url = process.env.REACT_APP_DOMAIN;
  const [meetingId, setMeetingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    const fetchMeetingId = async () => {
      try {
        const { data } = await axios.post(
          `${url}/api/appointment/generateMeetingId`,
          { appointid: id },
          config
        );
        setMeetingId(data.meetingId);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meeting ID:", error);
        setLoading(false);
      }
    };

    fetchMeetingId();
  }, []);

  return <div>{loading ? <p>Loading...</p> : <h2>{meetingId}</h2>}</div>;
};

export default Api;
