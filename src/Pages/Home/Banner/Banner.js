import React from 'react';
import BannerItems from './BannerItems';
import "./BannerItems.css";

const bannerData = [
  {
    image: "https://live.staticflickr.com/65535/51529557234_b028c6e2d6_b.jpg",
    title: "Dhanmondi Lake",
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: "https://live.staticflickr.com/65535/50656135682_b9a7d9384a_b.jpg",
    title: "Love and Sunset",
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: "https://live.staticflickr.com/65535/51679944997_25f7232ff1_b.jpg",
    title: "Sunset and River",
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: "https://live.staticflickr.com/65535/51681626775_e3254bf05a_b.jpg",
    title: "Sunset and River",
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: "https://live.staticflickr.com/65535/50655308258_a44d8c5ee4_b.jpg",
    title: "Sunset and Grass Field",
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: "https://live.staticflickr.com/65535/51529557234_b028c6e2d6_b.jpg",
    title: "Dhanmondi Lake",
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
    return (
      <div className="carousel pb-10">
        {bannerData.map((slide) => (
          <BannerItems key={slide.id} slide={slide}></BannerItems>
        ))}
      </div>
    );
};

export default Banner;