import axios from "axios";
import React,{ useEffect, useMemo, useState } from "react";
import API_KEY from "../../ApiKey/apiKey";

const findBySearch = (city) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ID&appid=${API_KEY}&lang=id&units=metric`;
  const regex = new RegExp(city, "gi");
  async function fetching() {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      const data = [res.data]
      const filter = data.filter((x) => regex.test(x.name))
      setData(filter);
    } catch (error) {
      setData([])
      console.log(error);
    }
    setLoading(false);
  }
  const citiMemoize = useMemo(() => {
    return () => city;
  }, [city]);

  useEffect(() => {
    if (city) {
      fetching();
    }
  }, [citiMemoize]);

  return { dataFind: data, loadingFind: loading };
};

export default findBySearch;
