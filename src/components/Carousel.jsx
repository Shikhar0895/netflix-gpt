import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Carousel = ({ movieList, headerTitle }) => {
  return (
    <div className="px-[60px]  ">
      <h2 className="text-white text-base">{headerTitle}</h2>
      <div
        className="flex gap-3 overflow-x-scroll h-[160px]"
        id="carouselWrapper"
      >
        <div className="flex">
          {movieList.map((card) => (
            <Card
              image={`https://image.tmdb.org/t/p/original${card.backdrop_path}`}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ image }) => {
  // w-[230px] h-[129px]
  return (
    <a>
      <div className="w-[230px] h-[129px] pr-1">
        <img src={image} alt="movieImg" />
      </div>
    </a>
  );
};

export default Carousel;
