import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

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
  console.log(silverPackage);
  return (
    <div className="flex flex-col items-center justify-center text-center my-5">
      <div>
        <h2 className="text-3xl font-bold uppercase">{category}</h2>
        {photographer.senior1.name}
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr className="hover">
              <th>Photo Size</th>
              <th>Print</th>
              <th>Frame</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>10R</td>
              <td>Printed</td>
              <td>With Frame</td>
              <td>{images.R10}</td>
            </tr>
            <tr className="hover">
              <td>5R</td>
              <td>Printed</td>
              <td>No Frame</td>
              <td>{images.R5}</td>
            </tr>
            <tr className="hover">
              <td>3R</td>
              <td>Printed</td>
              <td>No Frame</td>
              <td>{images.R3}</td>
            </tr>
            <tr className="hover">
              <td>Edited Images</td>
              <td>Not Printed</td>
              <td>No Frame</td>
              <td>{editedImage}</td>
            </tr>
            <tr className="hover">
              <td>Raw Images</td>
              <td>Not Printed</td>
              <td>No Frame</td>
              <td>{rawImage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SilverPack;
