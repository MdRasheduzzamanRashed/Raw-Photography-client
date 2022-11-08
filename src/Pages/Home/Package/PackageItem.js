import React from "react";

const PackageItem = ({ pack }) => {
  const { picture, name, photographer, details } = pack;
  const shortDetails = details.slice(0, 100);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className=' w-full h-72' alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Photographer/Cinematographer: {photographer}</p>
        <p>{shortDetails}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
