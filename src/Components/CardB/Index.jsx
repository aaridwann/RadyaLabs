import React, { useContext } from "react";
import { latitudeContext } from "../../Context/latitude";
import temperatureConverter from "../../Utils/FahrenheitConvert/Index";
import moment from "moment";
import DayConvert from "../../Utils/DayConvert/Index";

function CardB() {
  const { latitude } = useContext(latitudeContext);
  const { data } = latitude;
  const { list } = data;
  const listData = list ? list.slice(1, 5) : [];

  return (
    <div className=" w-full bg-white rounded-xl p-4 flex flex-col gap-10">
      <h1 className=" text-zinc-600 text-xl font-bold">Today's Forecast for {data?.city?.name}, Indonesia</h1>
      <div className=" w-full flex gap-4 justify-center items-center px-8 mt-10">
        {listData.map((data, i) => (
          <Items key={i} data={data} />
        ))}
      </div>
      <button className=" bg-blue-700 text-white font-semibold w-24 py-1 mt-20 rounded-2xl">Next Hour</button>
    </div>
  );
}

const Items = React.memo(function Items({ data }) {
  const date = moment(data.dt_txt).format("HH");
  const day = DayConvert(parseInt(date));
  const current = moment(new Date()).format("HH");
  const currentDay = DayConvert(parseInt(current));
  return (
    <div className=" cursor-pointer hover:scale-105 duration-700 flex flex-col justify-center items-center w-56 h-20 border-r-2 gap-4 border-zinc-300">
      <h1 className={` text-xl font-bold text-zinc-400 `}>{day}</h1>
      <h1 className={` ${day == currentDay ? " text-blue-500 font-semibold" : "text-zinc-400 font-normal"} text-6xl  text-zinc-400`}>
        {temperatureConverter(data?.main?.temp)}
        <span>&#176;</span>
      </h1>
      <img alt="icon" className=" h-20 -mt-4" src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`} />
      <span className=" flex items-center">
      <img src={'https://cdn0.iconfinder.com/data/icons/halloween-cute-vol-5/100/wizard__magic__stick__wand-512.png'} className='w- h-8'/>
      <h2 className=" font-semibold text-zinc-500">{data.pop * 100 + " %"}</h2>
      </span>
    </div>
  );
});

export default React.memo(CardB);
