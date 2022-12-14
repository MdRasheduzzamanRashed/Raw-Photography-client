import React from "react";

const Photographer = ({ pro }) => {
  const { picture, name, experience, expert } = pro;
  return (
    <div className="flex items-center gap-2 bg-orange-500 bg-opacity-25 rounded-3xl text-left">
      <div>
        <img src={picture} className=" rounded-3xl w-24" alt="" />
      </div>
      <div className="p-3">
        <h4 className=" text-xl font-medium">Name: {name}</h4>
        <h5>Experience: {experience} years</h5>
        <p>Expert in {expert}</p>
      </div>
    </div>
  );
};

export default Photographer;
