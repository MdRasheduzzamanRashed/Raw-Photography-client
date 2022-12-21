import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import PackageItem from "./PackageItem";
import { useLoaderData } from "react-router-dom";

const Package = () => {
  const packages = useLoaderData();
  useTitle("Package");
  const [rating, setRating] = useState([]);
  
  return (
    <div className="w-full">
      <div>
        <h2 className="text-4xl font-bold text-center my-10 bg-orange-500 text-white py-3">
          Packages
        </h2>
        <p></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {packages.map((pack) => (
          <PackageItem
            key={pack._id}
            pack={pack}
            setRating={setRating}
            rating={rating}
          ></PackageItem>
        ))}
      </div>
    </div>
  );
};

export default Package;
