import React from "react";
import { useLoaderData } from "react-router-dom";
import PackageDetails from "./PackageDetails";
import Photographer from "./Photographer/Photographer";

const SilverPack = () => {
  const packageCategory = useLoaderData();
  const silverPackage = packageCategory.find(
    (pc) => pc.category === "Silver Package"
  );

  const {
    category,
    photographer,
    duration,
    rawImage,
    images,
    editedImage,
    price,
  } = silverPackage;
  return (
    <div className="flex flex-col items-center justify-center text-center my-5">
      <div className="w-full">
        <h2 className="text-3xl font-bold uppercase">{category}</h2>
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
          <PackageDetails
            img={images}
            edImg={editedImage}
            raw={rawImage}
            duration={duration}
            price={price}
          ></PackageDetails>
        }
      </div>
    </div>
  );
};

export default SilverPack;
