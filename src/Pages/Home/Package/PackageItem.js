import React from "react";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const PackageItem = ({ pack }) => {
  const { _id, picture, name, author, details } = pack;
  const shortDetails = details.slice(0, 100);
  console.log(pack);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className=" w-full h-72" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Chief Photographer: {author}</p>
        <p>{shortDetails}</p>
        <div className="card-actions justify-between items-center">
          <p className="flex items-center gap-2">
          Rating: <FaStar className=" text-yellow-500"></FaStar>
          </p>
          <Link to={`/packages/${_id}`}>
            <button className="btn btn-primary mt-2">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
