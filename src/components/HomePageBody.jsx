import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { useSelector } from "react-redux";
import MainContainer from "./HomePage/MainContainer";
import SecondarySection from "./HomePage/SecondarySection";
import useGetNowPlaying from "../hooks/getNowPlaying";
const HomePageBody = () => {
  const [dataSet, setDataSet] = useState([]);
  const nowPlaying = useSelector((state) => state.movies.nowPlaying);
  const popular = useSelector((state) => state.movies.popular);

  useEffect(() => {
    //   if (nowPlaying.length !== 0 && popular.length !== 0) {
    //     setDataSet(...nowPlaying, ...popular);
    //     console.log(dataSet);
    //   }
  }, []);
  return (
    <>
      <MainContainer />
      <SecondarySection />
    </>
  );
};

export default HomePageBody;
