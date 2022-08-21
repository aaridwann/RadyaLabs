import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import FetchDetails from "../../Utils/FetchDetails/Index";
import CardDetails from "../../Components/CardDetails/Index";
import FetchCity from "../../Utils/FetchCity/Index";

function Details() {
  const { id } = useParams();
  const { data } = FetchDetails(id);
  const { city } = FetchCity(id);
  let list = [];
  data.list ? (list = [data.list[7], data.list[9]]) : [];
  const dataCity = city.data;

  return (
    <div className="w-full bg-white p-8">
      <span className=" flex items-center gap-4">
        <h1 className=" text-4xl text-zinc-700 font-bold">10 Hour Weather </h1>
        <p className=" mt-2 text-zinc-600 text-lg">
          {" "}
          {" - "} {dataCity.name}, Indonesia
        </p>
      </span>
      <h1 className=" text-lg">
        as of {moment(dataCity.dt_txt).format("- DD MMM YYYY, h:mm a")} WIB
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center pb-10 relative">
        {list.length > 0 &&
          data.list.map((data, i) => (
            <CardDetails
              key={i}
              index={i}
              data={data}
              time={data.dt_txt}
              temp={data?.main?.temp}
              temp_min={data?.main?.temp_min}
              temp_max={data?.main?.temp_max}
              icon={data?.weather[0].icon}
              pop={data?.pop * 100 + " %"}
              wind={data?.wind?.speed + " Mph"}
              humidity={data.main.humidity}
              description={data.weather[0].description}
            />
          ))}
      </div>
    </div>
  );
}

export default Details;
