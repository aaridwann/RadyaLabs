import React, { useEffect, useRef, useState } from "react";
import find from "../../assets/find.png";

function SearchComponent({ input }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    input(value);
  }, [value]);
  return (
    <div className=" w-80 h-8 border-2 rounded-sm border-white flex items-center justify-between px-2">
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="search city.."
        type={"text"}
        className=" w-full focus:outline-0 focus:ring-0  bg-transparent text-white text-center font-semibold"
      />
      <img className=" w-4" alt="src" src={find} />
    </div>
  );
}

export default SearchComponent;
