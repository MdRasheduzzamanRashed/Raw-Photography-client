import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuLists = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="dropdown dropdown-hover">
        <Link to="/packages" tabIndex={0}>
          Packages
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-orange-600 bg-opacity-50 rounded-box"
        >
          <li>
            <Link to="/silver-pack">Silver Pack</Link>
          </li>
          <li>
            <Link to="/gold-pack">Gold Pack</Link>
          </li>
          <li>
            <Link to="/platinum-pack">Platinum Pack</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-orange-500 text-white font-medium">
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
            <li>
              <Link to="/booking" className="mr-2">
                Book Now
              </Link>
            </li>
            {!user?.email && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/">
          <div className="md:flex items-center">
            <img src={logo} className="w-12 md:ml-4" alt="logo" />
            <span className="lg:text-4xl font-black">Raw Photography</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuLists}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/booking" className="mr-2">
          <button className="btn btn-outline text-white btn-sm hidden md:flex">
            Book Now
          </button>
        </Link>
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/QkZmQT4/default-avatar.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/bookings">My Bookings</Link>
              </li>
              <li>
                <Link to="/reviews">My Reviews</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline text-white mr-2 btn-sm hidden md:flex"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-outline text-white btn-sm hidden md:flex"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
