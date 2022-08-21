import moment from "moment";
import React, { useState } from "react";
import DayConvert from "../../Utils/DayConvert/Index";
import temperatureConverter from "../../Utils/FahrenheitConvert/Index";
import Icon from "../../Utils/Icon/Index";
import down2 from "../../assets/down2.png";

function CardDetails({ index, time, temp, icon, pop, wind, humidity, description, temp_min, temp_max }) {
  const date = moment(time).format("HH");
  const day = DayConvert(parseInt(date));
  const [show, setShow] = useState(index == 0 ? true : false);

  return (
    <div
      className={`opacity-100 duration-300 flex text-zinc-600 relative justify-around items-start p-4 
    ${show ? " h-96 delay-400 flex-col w-96" : "mb-4 justify-between border-b-2 border-zinc-500 items-center flex-row w-full h-20"}`}
    >
      <button onClick={() => setShow(!show)} className="absolute -top-6 right-0">
        <img className={` ${show ? " rotate-180" : " rotate-0"} duration-500 w-10`} src={down2} />
      </button>
      {/* Date 1*/}
      <h2 className={`font-semibold ${show ? "w-40" : "w-60"}`}>
        {moment(time).format("ddd, DD")} | {show ? day : moment(time).format("HH:mm")}
      </h2>

      {/* Icon 2 */}
      <div className={` ${show ? "w-full justify-between" : " justify-center w-3/4"} flex gap-4 items-center`}>
        {/* Degree */}
        <div className={` flex justify-start items-center ${show ? "w-2/3" : " w-3/4"}`}>
          <h1 className={`${show ? "text-6xl" : "text-2xl"} duration-300 delay-500 font-bold`}>
            {temperatureConverter(temp)}
            <span>&#176;</span>
          </h1>
          <h1 className={`${show ? "text-6xl scale-0 hidden invisible" : "scale-100 text-2xl"} duration-300 delay-200 font-bold`}>
            / {temperatureConverter(temp_max)}
            <span>&#176;</span>
          </h1>
          <img className=" brightness-50 w-24" alt="icon" src={Icon(icon)} />
        </div>

        {/* Probability */}
        <div className={` flex ${show ? " w-1/3 flex-col" : " w-full flex-row"} justify-center items-start gap-4`}>
          <h1 className=" text-lg font-semibold">{pop}</h1>
          <h1 className=" text-lg font-semibold">{wind}</h1>
        </div>
      </div>

      {/* Description 3 */}
      <p className=" w-32 text-lg font-semibold">{description}</p>
      <Columnt humidity={humidity} show={show} />
    </div>
  );
}

const Columnt = ({ humidity, show, uv, sunrise, sunset }) => {
  return (
    <div className={` ${show ? " opacity-100 " : "hidden opacity-0"} delay-500 duration-300 w-full mt-10 h-32 border rounded-md border-zinc-600 flex flex-col items-center p-1`}>
      <div className=" border-b flex justify-between px-4 gap-20 border-zinc-600 h-1/2 w-4/5">
        <div className=" flex flex-col">
          <h1>Humidity</h1>
          <h1 className=" font-bold">{humidity}%</h1>
        </div>
        <div className=" flex flex-col">
          <h1>UV Index</h1>
          <h1 className=" font-bold">EXTREME</h1>
        </div>
      </div>

      {/* 2 */}
      <div className=" mt-2 flex justify-between gap-20 px-4 border-zinc-600 h-1/2 w-4/5">
        <div className=" flex flex-col">
          <h1>Sunrise</h1>
          <h1 className=" font-bold">62%</h1>
        </div>
        <div className=" flex flex-col">
          <h1>Sunset</h1>
          <h1 className=" font-bold">EXTREME</h1>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardDetails);
