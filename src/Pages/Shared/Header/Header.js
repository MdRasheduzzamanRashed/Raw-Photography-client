import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const Header = () => {
  const menuLists = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link to="/package" className="justify-between">
          Package
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul className="p-2">
          <li>
            <Link to="/package">Silver Pack</Link>
          </li>
          <li>
            <Link to="/package">Gold Pack</Link>
          </li>
          <li>
            <Link to="/package">Platinum Pack</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuLists}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className="w-12" alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuLists}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline text-white">Book</button>
      </div>
    </div>
  );
};

export default Header;
