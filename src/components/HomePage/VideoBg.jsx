import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../assets";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTrailer } from "../../utils/movieSlice";

const VideoBg = ({ id }) => {
  const [currentTrailer, setCurrentTrailer] = useState(null);
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const response = await data.json();
      const trailerDetails = response.results.filter(
        (item) => item.type === "Trailer"
      );
      dispatch(addCurrentTrailer(trailerDetails[0].key));
    } catch (err) {
      console.error(err);
    }
  };
  const key = useSelector((state) => state.movies.currentTrailer.trailerKey);
  useEffect(() => {
    getMovieTrailer();
  }, []);
  return (
    <div
      className="absolute z-10 top-0 left-0 w-full h-[1000px] bg-blue-500 "
      id="trailer"
    >
      <iframe
        width="100%"
        height="700"
        src={`https://www.youtube-nocookie.com/embed/CHKn-yDCE2w?si=O6D0NqsK2K3wom1k&autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen={false}
      ></iframe>
      {/* <YouTube videoId="YPHn4xSvjNM" opts={{ height: "390", width: "640" }} /> */}
    </div>
  );
};

export default VideoBg;
