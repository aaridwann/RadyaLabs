import axios from "axios";
import React, { useEffect, useState } from "react";
import API_KEY from "../../ApiKey/apiKey";
function FetchCity(id) {
  const [city, setCity] = useState({ data: {}, loading: true, message: "" });
  const urlID = `https://api.openweathermap.org/data/2.5/weather?id=${id}&lang=id&appid=`;

  const fetching = async () => {
    try {
      const res = await axios.get(urlID + API_KEY);
      setCity({ ...city, data: res.data, message: "success", loading: false });
    } catch (error) {
      setCity({ ...city, message: error, data: null, loading: false });
    }
  };

  useEffect(() => {
    fetching();
  }, [id]);

  return { city };
}

export default FetchCity;
