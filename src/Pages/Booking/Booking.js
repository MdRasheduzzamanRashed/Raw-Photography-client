import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3 className="text-center text-3xl font-bold my-3 uppercase">
        Book your necessary package
      </h3>
      <form className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            className="input input-bordered w-full "
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            className="input input-bordered w-full "
            placeholder="Enter your email"
          />
          <input
            type="text"
            name="mobile"
            className="input input-bordered w-full "
            placeholder="Enter your mobile number"
          />
          <input
            type="text"
            name="address"
            className="input input-bordered w-full "
            placeholder="Enter your address"
          />
          <select className="select select-bordered w-full ">
            <option disabled selected>
              Please select your package
            </option>
            <option>Wedding Photography</option>
            <option>Pre Wedding Photography</option>
            <option>Holud Photography</option>
            <option>Product Photography</option>
            <option>Modeling Photo Shoot Outdoor</option>
            <option>Modeling Photo Shoot Indoor</option>
          </select>
          <select className="select select-bordered w-full ">
            <option disabled selected>
              Please select your package category
            </option>
            <option>Silver Package</option>
            <option>Gold Package</option>
            <option>Platinum Package</option>
          </select>
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full mt-3"
            placeholder="Please write in details if possible"
          ></textarea>
        </div>
        <label className={user?.email ? "hidden" : "block mb-2 text-red-600"}>
          Please login first.
        </label>
        <input
          type="button"
          value="Submit"
          className={user?.email ? "btn w-full" : "btn w-full btn-disabled"}
        />
      </form>
    </div>
  );
};

export default Booking;
