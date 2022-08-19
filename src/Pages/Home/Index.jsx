import React, { Suspense, useCallback, useState } from "react";
import NavbarComponent from "../../Components/Navbar";
import Loading from "../../Components/Loading";
import CardA from "../../Components/CardA/Index";
import CardB from "../../Components/CardB/Index";
import CardVertA from "../../Components/CardVerticalA/Index";
import NavbarExntd from "../../Components/NavbarExtend/Index";

function HomeScreen() {
 
  return (
    <>
     
      <NavbarComponent>
        <div className=" flex w-11/12 mx-auto mt-8 gap-4">
          {/* === LeftSide === */}
          <div className=" w-9/12 bg-yellow-400 flex flex-col gap-4">
            <Suspense fallback={<Loading />}>
              <CardA />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <CardB />
            </Suspense>
          </div>

          {/* === Right Side === */}
          <div className=" w-2/6 h-96 bg-green-400 flex flex-col gap-4">
            <CardVertA />
          </div>
        </div>
      </NavbarComponent>
    </>
  );
}

export default HomeScreen;
