import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Carousel = ({ movieList, headerTitle }) => {
  const [movies, setMovies] = useState(null);
  const data = useSelector((state) => state.movies?.nowPlaying);

  useEffect(() => {
    if (data.length == 0) return;

    setMovies(data);
  }, [data]);

  return (
    <div className="px-[60px]">
      <h2 className="text-white text-base">{headerTitle}</h2>
      <div
        className="flex justify-between gap-3 overflow-x-clip "
        id="carouselWrapper"
      >
        {movieList.map((card) => (
          <Card
            image={`https://image.tmdb.org/t/p/original${card.backdrop_path}`}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ image }) => {
  return (
    <a>
      <div className="w-[230px] h-[129px] bg-emerald-500">
        <img src={image} alt="movieImg" />
      </div>
    </a>
  );
};

export default Carousel;
