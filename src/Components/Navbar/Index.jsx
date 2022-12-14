import React, { useState } from "react";
import play from "../../assets/play.png";
import down from "../../assets/down.png";
import NavbarExntd from "../NavbarExtend/Index";
import SuggestComponent from "../Sugest/Index";
const menu = ["Today", "Hourly", "10 Day", "Weekend", "Monthly", "Radar"];

function NavbarComponent({ children, search ,dataFind }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className={`w-full bg-white ${showNav ? "delay-100  h-40 opacity-100" : " delay-500 h-0 opacity-0 "}  duration-300 relative bg-gradient-to-b from-purple-600 to-purple-400 flex flex-col justify-center `}>
        <NavbarExntd value={(e) => search(e)} />
        {<SuggestComponent dataFind={dataFind} />}
      </div>
      <div className="2xl:max-w-7xl relative mx-auto px-4 bg-purple-900 h-12 flex gap-4 justify-between items-center">
        {menu.map((menu, i) => (
          <button key={i} className=" text-white h-full font-semibold hover:border-b-4 border-0 duration-150 border-white w-32">
            {menu}
          </button>
        ))}
        <button className=" text-white font-semibold hover:border-b-4 border-0 duration-150 border-white w-32 flex items-center gap-2 justify-center">
          <img width={30} alt="play" src={play} />
          Video
        </button>
        <button onClick={() => setShowNav(!showNav)} className=" cursor-pointer text-white font-semibold hover:border-b-4 border-0 duration-150 border-white flex items-center gap-2 justify-center">
          More Forecasts
          <img className={`w-5 h-3 ${showNav ? 'rotate-180 duration-150 delay-150 ' : 'rotate-0 rot'} `} alt="down" src={down} />
        </button>
      </div>
      <div className=" mx-20">{children}</div>
    </>
  );
}

export default React.memo(NavbarComponent);
