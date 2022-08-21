import React, { Suspense, useCallback, useContext, useState } from "react";
import NavbarComponent from "../../Components/Navbar";
import Loading from "../../Components/Loading";
import CardA from "../../Components/CardA/Index";
import CardB from "../../Components/CardB/Index";
import CardVertA from "../../Components/CardVerticalA/Index";
import UseFetch from "../../Hooks/Index";
import { latitudeContext } from "../../Context/latitude";
import findBySearch from "../../Hooks/FetchingBySearch/Index";

function HomeScreen() {
  const [valueCity, setValueCity] = useState("");
  const { latitude } = useContext(latitudeContext);
  const { dataFind, loadingFind } = findBySearch(valueCity);
  return (
    <>
      {latitude.loading ? (
        <p>Loading...</p>
      ) : (
        <NavbarComponent dataFind={dataFind} search={(e) => setValueCity(e)}>
          <div className=" flex w-11/12 mx-auto mt-8 gap-4">
            {/* === Left Side === */}
            <div className=" w-9/12 flex flex-col gap-4">
              <Suspense fallback={<Loading />}>
                <CardA />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <CardB />
              </Suspense>
            </div>

            {/* === Right Side === */}
            <div className=" w-2/6 h-auto flex flex-col gap-4">
              <CardVertA />
              <CardVertA />
            </div>
          </div>
        </NavbarComponent>
      )}
    </>
  );
}

export default HomeScreen;
