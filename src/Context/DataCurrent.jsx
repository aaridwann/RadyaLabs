import { createContext, useEffect, useState } from "react";
import API_KEY from "../ApiKey/apiKey";
import axios from "axios";

export const dataCurrentContext = createContext();

const DataCurrentProvider = ({children}) => {
  const [dataCurrent, setDataCurrent] = useState({
    id:'',
    dataCurrent: "",
    loading: true,
    message: "",
  });

  function Fetching() {
    window.navigator.geolocation.getCurrentPosition((x) => {
     ;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${x.coords.latitude}&lon=${x.coords.longitude}&lang=id&appid=`;
      axios
        .get(url  + API_KEY)
        .then((data) => {
          setDataCurrent({
            ...dataCurrent,
            dataCurrent: data.data,
            loading: false,
          });
        })
        .catch((err) =>
          setDataCurrent({
            ...dataCurrent,
            message: err,
            loading: false,
            dataCurrent: null,
          })
        );
    });
    setDataCurrent({ ...dataCurrent, loading: false });
  }


  useEffect(() => {
    Fetching();
  }, [dataCurrent.id]);
  return (
    <dataCurrentContext.Provider value={{ dataCurrent, setDataCurrent }}>
      {children}
    </dataCurrentContext.Provider>
  );
};
export default DataCurrentProvider;
