import React from "react";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next, title } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img w-full">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="absolute transform -translate-y-1/2 left-24 top-3/4">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <a href={image} className="btn mt-2">
          <button>View Main Image</button>
        </a>
      </div>
      <div className="absolute flex justify-between top-1/2 transform -translate-y-1/2 left-5 right-5">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
