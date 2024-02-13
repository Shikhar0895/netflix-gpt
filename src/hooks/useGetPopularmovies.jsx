import React, { useEffect } from "react";
import { API_OPTIONS } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { addCarouseldata, addPopularMovies } from "../utils/movieSlice";

const useGetPopularmovies = () => {
  const storedata = useSelector((state) => state.movies.popular);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=2",
        API_OPTIONS
      );
      const response = await data.json();
      if (storedata.length > 0) return;
      dispatch(addPopularMovies(response.results));
      dispatch(
        addCarouseldata({ title: "Popular", data: [...response.results] })
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useGetPopularmovies;
