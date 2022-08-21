import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { latitudeContext } from "../Context/latitude";
import Details from "../Pages/Details/Index";
import Error from "../Pages/Error/Index";
import HomeScreen from "../Pages/Home/Index";

function Routing() {
  const { latitude } = useContext(latitudeContext);
  const { data } = latitude;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={!data.cod ? <Error /> : <HomeScreen />} />
        <Route path="/error" element={<Error />} />
        <Route path="/details:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
