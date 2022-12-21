import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const PackageItem = ({ pack }) => {
  const { _id, picture, name, author, details } = pack;
  const shortDetails = details.slice(0, 100);
  let [num, setNum] = useState(0);
  useEffect(() => {
    fetch(`https://raw-photography-server.vercel.app/ratings?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        let i = 0;
        data.map((d) => {
          i = i + d.rating;
        });
        setNum(i / data.length);
      });
  }, [name]);
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
            Rating: {num > 0 ? num : 0} out 10
            <FaStar className=" text-yellow-500"></FaStar>
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
