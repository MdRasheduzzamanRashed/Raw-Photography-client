import React from "react";
import useTitle from "./../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  useTitle("Blogs");
  const blogs = useLoaderData();
  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog._id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
