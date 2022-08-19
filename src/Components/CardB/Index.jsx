import React from "react";
import random from "../../assets/Weather/random.png";
import angin from "../../assets/Weather/angin.png";
import berawan1 from "../../assets/Weather/berawan1.png";
import berawan2 from "../../assets/Weather/berawan2.png";
import cerah from "../../assets/Weather/cerah.png";
import gerimis1 from "../../assets/Weather/gerimis1.png";
import gerimis2 from "../../assets/Weather/gerimis2.png";
import hujan1 from "../../assets/Weather/hujan1.png";
import hujan2 from "../../assets/Weather/hujan2.png";
import hujanpetir from "../../assets/Weather/hujanpetir.png";
import mendung from "../../assets/Weather/mendung.png";
import petir from "../../assets/Weather/petir.png";
const dummy = [
  {
    time: "morning",
    temp: 88,
    status: "cerah",
  },
  {
    time: "afternoon",
    temp: 30,
    status: "cloudy",
  },
  {
    time: "evening",
    temp: 20,
    status: "cloudy",
  },
  {
    time: "overnight",
    temp: 60,
    status: "cloudy",
  },
];

function CardB() {
  return (
    <div className=" w-full bg-white rounded-xl p-4 flex flex-col gap-10">
      <h1 className=" text-xl font-bold">Today's Forecast for Pusarakyat, West Java, Indonesia</h1>

      <div className=" w-full flex gap-4 justify-center items-center px-8 mt-10">
        {dummy.map((data,i) => (
          <Items key={i} time={data.time} temp={data.temp} status={data.status} />
        ))}
      </div>
      <button className=" bg-blue-700 text-white font-semibold w-24 py-1 mt-10 rounded-2xl">Next Hour</button>
    </div>
  );
}

const Items = React.memo(function Items({ time, temp, status }) {
  return (
    <div className=" cursor-pointer hover:scale-105 duration-700 flex flex-col justify-center items-center w-56 h-20 border-r-2 gap-4 border-zinc-300">
      <h1 className=" text-xl font-bold text-zinc-400">{time}</h1>
      <h1 className=" text-6xl font-semibold text-zinc-400">{temp}<span>&#176;</span></h1>
      <img alt="icon" className=" h-20 -mt-4" src={status == "cloudy" ? mendung : cerah} />
    </div>
  );
})

export default CardB;
