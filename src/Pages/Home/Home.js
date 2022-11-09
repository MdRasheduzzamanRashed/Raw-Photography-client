import React from "react";
import Banner from "./Banner/Banner";
import Package from "./Package/Package";
import { Helmet } from "react-helmet-async";
import useTitle from "./../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Package></Package>
    </div>
  );
};

export default Home;
