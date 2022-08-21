import axios from "axios";
import React, { useEffect, useState } from "react";
import API_KEY from "../ApiKey/apiKey";
function UseFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("success");

  async function fetching() {
    try {
      const res = await axios.get(url + API_KEY);
      setData(res.data);
    } catch (error) {
      setMessage(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetching();
  }, []);
  return { data: data, loading: loading, message: message };
}

export default UseFetch;
