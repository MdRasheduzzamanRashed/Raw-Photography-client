import React from "react";
import useTitle from "./../../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className="flex flex-col items-center justify-center md:my-36">
      <div className="avatar">
        <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img alt="" src="https://i.ibb.co/gRPSmBM/62088638-2170552559722425-3548267371661623296-n.jpg" />
        </div>
      </div>
      <div className="text-center my-5">
        <h2 className="text-4xl my-3 font-semibold uppercase">Md Rasheduzzaman</h2>
        <p className="text-xl">Professional Photographer And Cinematographer</p>
        <p className="text-xl">Owner Of Raw Photography</p>
        <p className="text-xl">Email: rased.cse.2016@gmail.com</p>
        <p className="text-xl">Mobile: 01789-000000, 01789-111111</p>
        <p className="text-xl">Location: Mohammadpur, Dhaka-1207, Bangladesh</p>
      </div>
    </div>
  );
};

export default About;
