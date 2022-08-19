import React from "react";
import angin from "../../assets/Weather/angin.png";
function CardA() {
  return (
    <div className="w-full h-80 bg-gradient-to-b rounded-xl from-purple-700 to-purple-400 flex flex-col items-start justify-between p-8">
      <div className=" flex flex-col ">
        <h1 className=" text-zinc-200 font-bold text-2xl">Pusakarakyat, West Java, Indonesia Weather</h1>
        <h3 className=" text-zinc-300 font-semibold text-lg ">as of 12:07 pm WIB</h3>
      </div>

      <div className=" flex -mt-10 -mb-10 justify-between w-full items-center">
        <h1 className=" text-white font-bold text-8xl">92<span>&#176;</span></h1>
        <img className=" brightness-200 -mr-10 h-52" alt="icon" src={angin} />
      </div>

      <div className=" flex justify-between w-full">
        <h1 className=" text-white font-bold text-2xl">Haze</h1>
        <h1 className=" text-white font-bold text-2xl">92<span>&#176;</span>/77<span>&#176;</span></h1>
      </div>

      <h3 className=" text-zinc-200 text-lg ">10% chance of rain through 1 pm</h3>
    </div>
  );
}

export default CardA;
