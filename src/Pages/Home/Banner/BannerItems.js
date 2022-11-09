import React from "react";
import { Link } from "react-router-dom";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img w-full">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="absolute transform -translate-y-1/2 left-6 md:left-28 top-1/2 text-center">
        <h1 className="text-xl md:text-3xl font-bold text-white">
          HIRE A{" "}
          <span className=" text-2xl md:text-3xl lg:text-5xl">
            PHOTOGRAPHER / CINEMATOGRAPHER
          </span>
        </h1>
        <h3 className="md:text-3xl font-semibold text-white">
          For Any Event, Anywhere in Bangladesh
        </h3>
        <Link to='/book' className="btn bg-orange-500 mt-2">
          <button>Hire Me</button>
        </Link>
      </div>
      <div className="absolute flex justify-between top-1/2 transform -translate-y-1/2 left-5 right-5">
        <a href={`#slide${prev}`} className="btn btn-circle">
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
