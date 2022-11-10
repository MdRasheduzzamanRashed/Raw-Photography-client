import React, { useContext } from "react";
import useTitle from "./../../../hooks/useTitle";
import { AuthContext } from "./../../../contexts/AuthProvider/AuthProvider";

const Review = ({ clientInfo }) => {
  useTitle("Review");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const name = user.displayName;
    const email = user.email;
    const rev = form.rev.value;
    const selectPackage = clientInfo.selectPackage;
    const selectCategory = clientInfo.selectCategory;

    const review = {
      packageName: selectPackage,
      categoryName: selectCategory,
      rating: rating,
      email: email,
      name: name,
      rev: rev,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("raw-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review submitted successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" className="input input-bordered" name="rating" />
      <input
        type="text"
        name="rev"
        className="textarea textarea-bordered w-full mt-3"
        id=""
        placeholder="Please write a review if possible"
      />
      <input type="submit" value="Submit" className="btn w-full" />
    </form>
  );
};

export default Review;
