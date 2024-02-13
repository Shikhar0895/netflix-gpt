import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCarouseldata, addNowPlayinMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../assets";

const useGetNowPlaying = () => {
  const dispatch = useDispatch();
  const subSlicedata = useSelector((state) => state.movies.nowPlaying);

  const getNowPlayingData = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      if (subSlicedata.length > 0) return;
      dispatch(addNowPlayinMovies(json.results));
      dispatch(
        addCarouseldata({ title: "Now Playing", data: [...json.results] })
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNowPlayingData();
  }, []);
};

export default useGetNowPlaying;
