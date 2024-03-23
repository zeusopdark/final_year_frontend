import React, { useState, useEffect } from "react";
import fetchData from "../helper/apiCall";

const Api = () => {
  const [meetingId, setMeetingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeetingId = async () => {
      try {
        const { meetingId } = await fetchData(
          "http://localhost:5000/api/appointment/generateMeetingId"
        );
        setMeetingId(meetingId);
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
