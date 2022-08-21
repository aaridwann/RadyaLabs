import React, { useContext } from "react";
import SearchComponent from "../Search/Index";
import { dataCurrentContext } from "../../Context/DataCurrent";
import globe from '../../assets/globe.png'
import down from '../../assets/down.png'
import Icon from "../../Utils/Icon/Index";
import temperatureConverter from "../../Utils/FahrenheitConvert/Index";

function NavbarExntd({value}) {
  const {dataCurrent} = useContext(dataCurrentContext)
  const dataReal = dataCurrent.dataCurrent
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      {/* Section A */}
      <div className="bg-purple-600 flex w-full justify-between items-center px-8 py-4">
        <h1 className=" text-purple-600 bg-white pr-8 p-2 text-md font-bold">The <br/>Weather<br/>Channel</h1>
        <SearchComponent input={(e) => value(e)} />
        <div className=" flex gap-2 justify-center items-center text-white font-bold">
          <img alt='globe' className=" w-7" src={globe}/>
          <p>US</p>
          <p>|</p>
          <p>ID</p>
          <img alt='down' className=" w-3 h-2" src={down}/>
        </div>
      </div>

      {/* Section B */}
      <div className="bg-purple-400 w-full py-2 flex gap-2 justify-start items-center px-8">
        <img className=" w-6" alt="icon" src={Icon(dataReal.weather[0].icon)} />
        <p className=" font-semibold text-white"> {temperatureConverter(dataReal?.main?.temp)}<span>&#176;</span> {' '}{dataReal.name}, Indonesia</p>
      </div>
    </div>
  );
}

export default React.memo(NavbarExntd);
