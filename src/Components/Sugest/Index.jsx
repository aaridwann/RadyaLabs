import React from "react";
import { useNavigate } from "react-router-dom";

function SuggestComponent({ dataFind }) {
  const navigate = useNavigate();
  return (
    <div
      className={` w-96 duration-500 bg-white rounded-b-2xl absolute ml-auto px-8  mr-auto text-center flex justify-center items-center left-0 right-0 mt-32 z-10 ${
        dataFind.length !== 0 ? " visible h-32" : ` invisible h-0`
      }`}
    >
      <button className=" hover:bg-purple-400 rounded-2xl hover:text-white duration-300 w-full">
        <p onClick={() => navigate("/details" + dataFind[0].id)} className=" font-bold py-2 px-10 ">
          {dataFind[0]?.name}
        </p>
      </button>
    </div>
  );
}

export default React.memo(SuggestComponent);
