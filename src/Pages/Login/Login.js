import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        //jwt token
        fetch("https://raw-photography-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // store jwt token in local storage
            localStorage.setItem("raw-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        toast.error("Please enter correct info");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        //jwt token
        fetch("https://raw-photography-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // store jwt token in local storage
            localStorage.setItem("raw-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        toast.error("Please enter correct info");
      });
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="w-full"
            src="https://i.ibb.co/NZs5mYb/Mobile-login.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center text-orange-500 font-bold">
            Login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center mb-4"
          >
            Log in with Google
            <FcGoogle className="ml-2"></FcGoogle>
          </button>

          <p className="text-center">
            New to Raw Photography!
            <Link className="text-orange-600 font-bold ml-1" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
