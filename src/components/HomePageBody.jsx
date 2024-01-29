import React from "react";
import Carousel from "./Carousel";
const HomePageBody = () => {
  return (
    <>
      <div
        className="absolute z-10 top-0 left-0 w-full h-[1000px] bg-blue-500 "
        id="trailer"
      >
        <div className="absolute z-20 top-[500px] w-full h-[300px] bg-red-500">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default HomePageBody;
