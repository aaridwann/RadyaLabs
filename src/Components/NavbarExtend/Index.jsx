import React from "react";
import SearchComponent from "../Search/Index";
import mendung from "../../assets/Weather/mendung.png";

function NavbarExntd() {
  return (
    <div className="  w-full h-full flex flex-col justify-center items-center">
      {/* Section A */}
      <div className="bg-purple-600 flex w-full justify-between items-center px-8 py-4">
        <h1 className=" text-white text-2xl font-bold">Title</h1>
        <SearchComponent input={(e) => console.log(e)} />
        <div className=" flex gap-2">
          <p>ID</p>
          <p>EN</p>
        </div>
      </div>

      {/* Section B */}
      <div className="bg-purple-400 w-full py-2 flex justify-start items-center px-8">
        <img className=" w-6" alt="icon" src={mendung} />
        <p>Bandung, West Java, Indonesia</p>
      </div>
    </div>
  );
}

export default NavbarExntd;
