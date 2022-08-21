import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import API_KEY from "../ApiKey/apiKey";
import axios from "axios";
export const latitudeContext = createContext();
function LatitudeProvider({ children }) {
  const [latitude, setLatitude] = useState({ data: [], loading: true, message: "" });
  
  function fetching() {
    window.navigator.geolocation.getCurrentPosition(async (x) => {
      const url =`http://api.openweathermap.org/data/2.5/forecast?cnt=5&lang=id&lat=${x.coords.latitude}&lon=${x.coords.longitude}&appid=`
      axios
        .get(url + API_KEY)
        .then((data) => {
          setLatitude({ ...latitude, data: data.data, loading: false });
        })
        .catch((err) => setLatitude({ ...latitude, message: err, loading: false, data: null }));
    });
    setLatitude({...latitude,loading:false})
  }

  useEffect(() => {
    fetching();
  }, []);

  return <latitudeContext.Provider value={{ latitude, setLatitude }}>{children}</latitudeContext.Provider>;
}

export default React.memo(LatitudeProvider);
