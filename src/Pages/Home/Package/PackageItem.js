import React from "react";
import { Link } from 'react-router-dom';

const PackageItem = ({ pack }) => {
  const { _id, picture, name, photographer, details } = pack;
  const shortDetails = details.slice(0, 100);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className=" w-full h-72" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Photographer/Cinematographer: {photographer}</p>
        <p>{shortDetails}</p>
        <div className="card-actions justify-end">
          <Link to={`/packages/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
