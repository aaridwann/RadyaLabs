import moment from "moment";
import React, { useState } from "react";
import DayConvert from "../../Utils/DayConvert/Index";
import temperatureConverter from "../../Utils/FahrenheitConvert/Index";
import Icon from "../../Utils/Icon/Index";
import down2 from "../../assets/down2.png";
import humidityicon from "../../assets/humidityicon.png";

function CardDetails({ index, time, temp, icon, pop, wind, humidity, description, temp_min, temp_max }) {
  const date = moment(time).format("HH");
  const day = DayConvert(parseInt(date));
  const [show, setShow] = useState(index == 0 ? true : false);

  return (
    <div
      className={`opacity-100 duration-500 flex text-zinc-600 relative justify-around items-start p-4
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
          <h1 className={`${show ? " scale-0 hidden invisible" : "scale-100 text-lg"} mt-2 duration-300 delay-200 font-semibold`}>
             / {temperatureConverter(temp_max)}
            <span>&#176;</span>
          </h1>
          <img className=" brightness-50 w-24" alt="icon" src={Icon(icon)} />
        </div>

        {/* Probability */}
        <div className={` flex ${show ? " w-1/3 flex-col" : " w-full flex-row"} justify-center items-start gap-4`}>
          <span className="flex items-center gap-2">
          <img src={'https://cdn0.iconfinder.com/data/icons/halloween-cute-vol-5/100/wizard__magic__stick__wand-512.png'} className='w- h-8'/>
          <h1 className=" text-lg font-semibold">{pop}</h1>
          </span>
          <span className="flex items-center gap-2">
          <img src={'https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png'} className='w-8 h-10'/>
          <h1 className=" text-lg font-semibold">{wind}</h1>
          </span>
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
          <span className=" flex justify-center items-center gap-2">
          <img src={humidityicon} className='w-3 h-4'  />
          <h1>Humidity</h1>
          </span>
          <h1 className=" ml-5 font-bold">{humidity}%</h1>
        </div>
        <div className=" flex flex-col">
          <span className=" flex justify-start items-center gap-2 w-40">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IpzLxaJe9BCMoxkty8EuYOGBkfLTsqxh4Q&usqp=CAU'} className='w-6 h-6'  />
          <h1>UV Index</h1>
          </span>
          <h1 className=" font-bold ml-8">EXTREME</h1>
        </div>
      </div>

      {/* 2 */}
      <div className=" mt-2 flex justify-between gap-20 pl-4 border-zinc-600 h-1/2 w-4/5">
        <div className="flex flex-col -ml-4">
          <span className=" flex justify-start items-center gap-0">
          <img src={'https://www.shareicon.net/download/2015/09/07/97514_sunrise.ico'} className='w-8 h-9'  />
          <h1 >Sunrise</h1>
          </span>
          <h1 className="ml-8 font-bold">06:00</h1>
        </div>


        <div className=" flex flex-col items-start justify-start w-28 ">
          <span className=" flex justify-start items-center gap-0  ">
          <img src={'https://www.shareicon.net/data/2015/09/07/97513_sunset_512x512.png'} className='w-8 h-9'  />
          <h1>Sunset</h1>
          </span>
          <h1 className=" font-bold ml-8">05:00</h1>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardDetails);
