import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import PackageItem from "./PackageItem";

const Package = () => {
  const [packages, setPackages] = useState([]);
  useTitle("Packages");
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

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
          <PackageItem key={pack._id} pack={pack}></PackageItem>
        ))}
      </div>
    </div>
  );
};

export default Package;