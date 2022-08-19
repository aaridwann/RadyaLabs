import React from "react";
import mapDummy from "../../assets/mapDummy.jpg";
function CardVertA() {
  return (
    <div className=" rounded-xl w-full flex flex-col justify-between items-start bg-white h-96 gap-4 py-4">
      <h1 className=" ml-4 font-bold">Hurricane Control</h1>
      <div className=" w-full h-5/6 flex justify-center items-center">
        <img alt="map" className=" h-full w-full " src={mapDummy} />
      </div>
      <button className=" bg-blue-600 px-4 float-left text-white font-semibold ml-4 rounded-xl">Track Strom</button>
    </div>
  );
}

export default CardVertA;
