import React from "react";

const Blog = ({ blog }) => {
  const { que, author, publish, details } = blog;
  return (
    <div className="my-10">
      <div className=" bg-orange-500 mb-5 py-3">
        <h3 className=" text-center text-3xl">{que}</h3>
        <div className="flex justify-between px-5 font-medium items-center">
          <p>{author}</p>
          <p>{publish}</p>
        </div>
      </div>
      <div>
        <p className="text-justify">{details}</p>
      </div>
    </div>
  );
};

export default Blog;
