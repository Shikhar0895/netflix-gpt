import React, { useEffect } from "react";
import { API_OPTIONS } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { addCarouseldata, addTopRatedMovies } from "../utils/movieSlice";

const useGetTopRatedMovies = () => {
  const storedata = useSelector((state) => state.movies.topRated);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=2",
        API_OPTIONS
      );
      const response = await data.json();
      if (storedata.length > 0) return;
      dispatch(addTopRatedMovies(response.results));
      dispatch(
        addCarouseldata({ title: "Top Rated", data: [...response.results] })
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useGetTopRatedMovies;
