import Home from "../../Pages/Home/Home";
import Booking from "./../../Pages/Booking/Booking";
import SignUp from "./../../Pages/SignUp/SignUp";
import Login from "./../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Bookings from "../../Pages/Bookings/Bookings";
import Package from "./../../Pages/Home/Package/Package";
import Blogs from "./../../Pages/Blogs/Blogs";
import About from "./../../Pages/About/About";
import SilverPack from "./../../Pages/Home/Package/packageCategory/SilverPack";
import PlatinumPack from "./../../Pages/Home/Package/packageCategory/PlatinumPack";
import GoldPack from "./../../Pages/Home/Package/packageCategory/GoldPack";
import PackageDetails from "../../Pages/Home/Package/PackageDetails";
import CategoriesDetails from './../../Pages/Home/Package/packageCategory/CategoriesDetails';

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/packages"),
      },
      {
        path: "/booking",
        loader: () => fetch("http://localhost:5000/categories"),
        element: <Booking></Booking>,
      },
      {
        path: "/packages",
        element: <Package></Package>,
        loader: () => fetch("http://localhost:5000/packages"),
      },
      {
        path: "/packages/:id",
        element: <PackageDetails></PackageDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/silver-pack",
        loader: () => fetch("http://localhost:5000/categories"),
        element: <SilverPack></SilverPack>,
      },
      {
        path: "/gold-pack",
        loader: () => fetch("http://localhost:5000/categories"),
        element: <GoldPack></GoldPack>,
      },
      {
        path: "/platinum-pack",
        loader: () => fetch("http://localhost:5000/categories"),
        element: <PlatinumPack></PlatinumPack>,
      },
      {
        path: "/categories",
        loader: () => fetch("http://localhost:5000/categories"),
        element: <CategoriesDetails></CategoriesDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("packageCategory.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
