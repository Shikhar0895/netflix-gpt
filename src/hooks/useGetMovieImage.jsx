import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY } from "../assets";
import {
  addCurrentMovieImages,
  addCurrentMovieLogo,
} from "../utils/movieSlice";

const useGetMovieImage = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.movies.assets);
  const id = useSelector((state) => state.movies?.nowPlaying[0][0].id);
  const getMovieImage = async () => {
    try {
      //   const assets = useSelector((state) => state.movies.assets);
      //   const id = useSelector((state) => state.movies.nowPlaying[0][0].id);
      //   console.log(id);

      const image = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`
      );
      //Extract image url
      const json = await image.json();
      const backdropsUrl = await json.backdrops.map(
        (image) => `https://image.tmdb.org/t/p/original${image.file_path}`
      );
      const logoUrl = await json.logos.map(
        (image) => `https://image.tmdb.org/t/p/original${image.file_path}`
      );
      if (assets[0].backdrops.length > 0 && assets[1].logos.length > 0) return;
      dispatch(addCurrentMovieImages(backdropsUrl[0]));
      dispatch(addCurrentMovieLogo(logoUrl[0]));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieImage();
  }, []);
};

export default useGetMovieImage;
