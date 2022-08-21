import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchDetails from "../../Utils/FetchDetails/Index";
import CardDetails from "../../Components/CardDetails/Index";

function Details() {
  const { id } = useParams();
  const { data } = FetchDetails(id);
  const [show, setShow] = useState(false);
  let list = [];
  data.list ? (list = [data.list[7], data.list[9]]) : [];

  const set = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <div className="w-full bg-white p-8">
      <div className="flex flex-col gap-4 justify-center items-center pb-10 relative">
        {list.length > 0 &&
          data.list.map((data, i) => (
            <>
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
            </>
          ))}
      </div>
    </div>
  );
}

export default Details;
