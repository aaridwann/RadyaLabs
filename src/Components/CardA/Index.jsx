import React, { useContext } from "react";
import moment from "moment";
import { latitudeContext } from "../../Context/latitude";
import temperatureConverter from "../../Utils/FahrenheitConvert/Index";
import { dataCurrentContext } from "../../Context/DataCurrent";



function CardA() {
  const { dataCurrent } = useContext(dataCurrentContext);
  const { latitude } = useContext(latitudeContext);
  const { data } = latitude;
  const dataReal = dataCurrent.dataCurrent
  return (
    <div className="w-full h-80 bg-gradient-to-b rounded-xl from-purple-700 to-purple-400 flex flex-col items-start justify-between p-8">
      <div className=" flex flex-col ">
        <h1 className=" text-zinc-200 font-bold text-2xl">
          {dataReal?.name}, Indonesia Weather
        </h1>
        <h3 className=" text-zinc-300 font-semibold text-lg ">
          as of {moment(dataReal?.dt_txt).format("dddd, DD MMMM YYYY, HH:mm ")}{" "}
          WIB
        </h3>
      </div>

      <div className=" flex -mt-10 -mb-10 justify-between w-full items-center">
        <h1 className=" text-white font-bold text-8xl">
          {temperatureConverter(dataReal?.main?.temp)}
          <span>&#176;</span>
        </h1>
        <img
          className=" brightness-200 -mr-10 h-52"
          alt="icon"
          src={`http://openweathermap.org/img/wn/${dataReal?.weather[0]?.icon}@4x.png`}
        />
      </div>

      <div className=" flex justify-between w-full">
        <h1 className=" text-white font-bold text-2xl">
          {dataReal.weather[0].main}
        </h1>
        <h1 className=" text-white font-bold text-2xl">
          {temperatureConverter(dataReal?.main?.temp_min)}
          <span>&#176;</span>/{temperatureConverter(dataReal?.main?.temp_max)}
          <span>&#176;</span>
        </h1>
      </div>

      <h3 className=" text-zinc-200 text-lg ">
        {dataReal?.weather[0]?.description}
      </h3>
    </div>
  );
}

export default React.memo(CardA);
