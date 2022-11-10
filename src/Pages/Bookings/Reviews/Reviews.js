import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("raw-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return console.log("error");
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);
  console.log(reviews);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this booking"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("raw-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className=" text-3xl text-center font-bold my-5">Your Reviews</h2>
      <div className="overflow-x-auto w-full">
        <table className="table table-auto w-full">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Package Name</th>
              <th>Category Name</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewRow
                key={reviews._id}
                review={review}
                handleDelete={handleDelete}
              ></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
