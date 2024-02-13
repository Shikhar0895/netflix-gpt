import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import { useDispatch, useSelector } from "react-redux";
import useGetPopularmovies from "../../hooks/useGetPopularmovies";
import useGetTopRatedMovies from "../../hooks/useGetTopRatedMovies";

const SecondarySection = () => {
  const nowPlaying = useSelector((state) => state.movies.nowPlaying);
  const carouselData = useSelector((state) => state.movies.carouselData);
  const dispatch = useDispatch();
  useGetPopularmovies();
  useGetTopRatedMovies();

  return (
    <div className="absolute z-20 top-[650px] w-full p-5 flex flex-col gap-5">
      {carouselData.length !== 0 &&
        carouselData?.map((data) => (
          <Carousel
            key={data.title}
            movieList={data.data}
            headerTitle={data.title}
          />
        ))}
    </div>
  );
};

export default SecondarySection;
