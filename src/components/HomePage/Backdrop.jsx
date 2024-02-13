import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useGetMovieImage from "../../hooks/useGetMovieImage";

const Backdrop = () => {
  const [url, setUrl] = useState(null);
  useGetMovieImage();
  const imageUrl = useSelector((state) => state.movies.assets[0]);
  // console.log(imageUrl);

  useEffect(() => {
    setUrl(imageUrl?.backdrops[0]);
  }, [imageUrl]);

  return (
    <div className="relative">
      <img src={url} className="" alt="movieImage" />
      <div className="absolute w-full bg-gradient-to-b from-transparent via-[#0e0e0e99] to-[#141414] h-[120px] z-20 bottom-0"></div>
    </div>
  );
};

export default Backdrop;
