import React, { useEffect, useState } from "react";
import HomePageBody from "./HomePageBody";
import Header from "./Header";
import useGetNowPlaying from "../hooks/getNowPlaying";
import useGetPopularmovies from "../hooks/useGetPopularmovies";
import { useSelector } from "react-redux";

const Browse = () => {
  useGetNowPlaying();

  return (
    <>
      <Header />
      <HomePageBody />
    </>
  );
};

export default Browse;
