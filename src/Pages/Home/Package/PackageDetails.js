import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PackageDetails = () => {
  const { picture, name, author, details } = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center lg:w-1/2 mx-auto">
      <h2 className=" text-4xl font-bold my-5">{name}</h2>
      <img src={picture} className=" w-full" alt="" />
      <h4 className=" text-2xl font-semibold">Chief Photographer: {author}</h4>
      <p className="py-2">{details}</p>
      <ul className="py-5 list-disc">
        N.B
        <li>This package only for in Dhaka City.</li>
        <li>
          For outside of Dhaka Travel Cost will be added & Client can bear
          Accommodation Cost.
        </li>
        <li>For Extra Time you will be charged 1500 (Per Hour).</li>
        <li>All fee depends on package category.</li>
        <li>
          Paid advance 30% on booking, 50% Last Day of Event & 20% pay on
          delivery time.
        </li>
      </ul>
      <Link to="/categories" className="mb-5">
        <button className="btn bg-orange-500 text-white">View Package Category</button>
      </Link>
    </div>
  );
};

export default PackageDetails;
