import React from "react";

const Carousel = (contentList, headerTitle) => {
  return (
    <div className="px-[60px]">
      <h2>headerTitle</h2>
      {/* {contentList.map((card) => (
        <Card image={card.image} />
      ))} */}
      <Card />
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
