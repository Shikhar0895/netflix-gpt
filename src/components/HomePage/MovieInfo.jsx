import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline as Info } from "react-icons/io";
import { useSelector } from "react-redux";

const MovieInfo = ({ title, info, id }) => {
  const logoUrl = useSelector((state) => state.movies?.assets[1].logos[0]);

  return (
    <div className="h-auto box-content w-[300px] ml-10 flex flex-col gap-5 absolute z-20 top-[300px] backdrop-blur-sm p-7 rounded-sm">
      <img src={logoUrl} alt="logo" />
      <h4 className="text-white">{info}</h4>
      <div className="flex gap-3 py-3">
        <button className="px-4 py-2 rounded-sm bg-white text-black flex gap-2 items-center hover:bg-opacity-30">
          <FaPlay /> Play Now
        </button>
        <button className="px-4 py-2 rounded-sm text-white bg-[#6d6e6b] bg-opacity-70 flex gap-2 items-center hover:bg-opacity-30">
          <Info /> More Info
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
