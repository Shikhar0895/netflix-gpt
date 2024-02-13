import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieInfo from "./MovieInfo";
import useGetMovieImage from "../../hooks/useGetMovieImage";
import Backdrop from "./Backdrop";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlaying);

  if (!movies || movies.length === 0) return;

  const { original_title, overview, id } = movies[0][0];

  return (
    <div className="bg-[#141414] h-[2000px]" id="MainContWrapper">
      <MovieInfo title={original_title} info={overview} id={id} />
      <Backdrop id={id} />
      {/* <VideoBg /> */}
    </div>
  );
};

export default MainContainer;
