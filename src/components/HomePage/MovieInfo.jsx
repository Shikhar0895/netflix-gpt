import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline as Info } from "react-icons/io";
import { useSelector } from "react-redux";

const MovieInfo = ({ title, info, id }) => {
  const logoUrl = useSelector((state) => state.movies?.assets[1].logos[0]);

  return (
    <div className="h-auto box-content w-[300px] ml-10 flex flex-col gap-5 absolute z-20 top-[240px]">
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

{
  /*
{
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}

*/
}
