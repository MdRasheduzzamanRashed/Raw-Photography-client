import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "./../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  useTitle("Booking");
  const { user } = useContext(AuthContext);
  const [selectPackage, setSelectPackage] = useState("Wedding Photography");
  const [selectCategory, setSelectCategory] = useState("Silver Package");
  const [fee, setFee] = useState('15000');
  const [duration, setDuration] = useState('4 Hours');

  const categories = useLoaderData();

  const handlePackageChange = (e) => {
    setSelectPackage(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setSelectCategory(e.target.value);
    const selectedCategory = categories.find(
      (category) => category.category === selectCategory
    );
    setDuration(selectedCategory.duration);
    setFee(selectedCategory.price);
    console.log(selectedCategory);
  };
  console.log(selectCategory, selectPackage);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user.email;
    const mobile = form.mobile.value;
    const address = form.address.value;

    const booking = {
      packageName: selectPackage,
      categoryName: selectCategory,
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      fee: fee,
      duration: duration,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("raw-token")}`,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Booking placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-bold my-3 uppercase">
        Book your necessary package
      </h3>
      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            required
            className="input input-bordered w-full "
            defaultValue={user?.name}
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            className="input input-bordered w-full "
            defaultValue={user?.email}
            disabled
            placeholder="Enter your email"
          />
          <input
            type="text"
            name="mobile"
            required
            className="input input-bordered w-full "
            placeholder="Enter your mobile number"
          />
          <input
            type="text"
            name="address"
            required
            className="input input-bordered w-full "
            placeholder="Enter your address"
          />
          <select
            value={selectPackage}
            onChange={handlePackageChange}
            className="select select-bordered w-full "
          >
            <option disabled>Please select your package</option>
            <option value="Wedding Photography">Wedding Photography</option>
            <option value="Pre Wedding Photography">
              Pre Wedding Photography
            </option>
            <option value="Holud Photography">Holud Photography</option>
            <option value="Product Photography">Product Photography</option>
            <option value="Modeling Photo Shoot Outdoor">
              Modeling Photo Shoot Outdoor
            </option>
            <option value="Modeling Photo Shoot Indoor">
              Modeling Photo Shoot Indoor
            </option>
          </select>
          <select
            value={selectCategory}
            onChange={handleCategoryChange}
            className="select select-bordered w-full "
          >
            <option disabled>Please select your package category</option>
            <option value="Silver Package">Silver Package</option>
            <option value="Gold Package">Gold Package</option>
            <option value="Platinum Package">Platinum Package</option>
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
          type="submit"
          value="Submit"
          className={user?.email ? "btn w-full" : "btn w-full btn-disabled"}
        />
      </form>
    </div>
  );
};

export default Booking;
