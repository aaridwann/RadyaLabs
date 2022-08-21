import axios from "axios";
import React, { useEffect, useState } from "react";
import API_KEY from "../../ApiKey/apiKey";

function FetchDetails(id) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?cnt=10&lang=id&id=${id}&appid=${API_KEY}`;
  const [data, setData] = useState({ data: [], loading: true, message: "" });

  async function Fetching() {
    try {
      const res = await axios.get(url);
      setData({ ...data, data: res.data, loaing: false, message: "success" });
    } catch (error) {
      setData({ ...data, message: error, loading: false, data: null });
    }
  }

  useEffect(() => {
    Fetching();
  }, [id]);

  return data;
}

export default FetchDetails;
