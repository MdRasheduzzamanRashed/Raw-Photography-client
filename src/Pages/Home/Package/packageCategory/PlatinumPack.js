import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";
import Photographer from "./Photographer/Photographer";

const PlatinumPack = () => {
  const packageCategory = useLoaderData();
  const platinumPackage = packageCategory.find(
    (pc) => pc.category === "Platinum Package"
  );

  const {
    category,
    photographer,
    duration,
    rawImage,
    images,
    editedImage,
    price,
  } = platinumPackage;
  return (
    <div className="flex flex-col items-center justify-center text-center my-5">
      <div className="w-full">
        <h2 className="text-3xl font-bold uppercase bg-orange-500 py-2">
          {category}
        </h2>
        <div className="flex items-center justify-evenly mt-3">
          <p className=" text-lg font-medium">Duration: {duration}</p>
          <p className=" text-lg font-medium">Package Fee: {price} BDT</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
          {photographer.map((pro) => (
            <Photographer pro={pro} key={pro._id}></Photographer>
          ))}
        </div>
      </div>
      <div className="w-full mt-5">
        {
          <CategoryDetails
            img={images}
            edImg={editedImage}
            raw={rawImage}
          ></CategoryDetails>
        }
      </div>
      <Link to="/booking" className="mb-5">
        <button className="btn bg-orange-500">Book Schedule</button>
      </Link>
    </div>
  );
};

export default PlatinumPack;
