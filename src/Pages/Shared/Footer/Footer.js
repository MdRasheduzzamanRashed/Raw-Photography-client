import React from "react";
import logo from "../../../assets/logo/logo.png";
import { FaFacebook, FaFlickr, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-orange-500 text-white font-medium">
      <div>
        <img src={logo} className="w-12" alt="LOGO" />
        <p>
          Raw Photography
          <br />
          Providing reliable Photography and Cinematography since 2020
        </p>
      </div>
      <div>
        <span className="text-white uppercase text-lg">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/mrzgallery">
            <FaFacebook className=" text-3xl"></FaFacebook>
          </a>
          <a href="https://www.instagram.com/mrzphotography96/">
            <FaInstagram className=" text-3xl"></FaInstagram>
          </a>
          <a href="https://www.flickr.com/photos/mrgallery/">
            <FaFlickr className=" text-3xl"></FaFlickr>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
