import React, { useContext } from "react";
import useTitle from "./../../../hooks/useTitle";
import { AuthContext } from "./../../../contexts/AuthProvider/AuthProvider";

const Review = () => {
  useTitle("Review");
  const { user, packName } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const name = user.displayName;
    const email = user.email;
    const rev = form.rev.value;
    const selectPackage = packName;

    const review = {
      packageName: selectPackage,
      rating: rating,
      email: email,
      name: name,
      rev: rev,
    };

    fetch("https://raw-photography-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("raw-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review submitted successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold my-5">
        Write a Review on {packName}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          className="input input-bordered w-full my-3"
          placeholder="Rate the package between 1 to 10"
        />
        <label>Review</label>
        <input
          type="text"
          name="rev"
          className="input input-bordered w-full my-3"
          placeholder="Please write a review if possible"
        />
        <input type="submit" value="Submit" className="btn w-full" />
      </form>
    </div>
  );
};

export default Review;
