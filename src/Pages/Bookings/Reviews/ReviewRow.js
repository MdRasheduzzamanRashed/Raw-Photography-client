import React from "react";

const ReviewRow = ({ review, handleDelete }) => {
  const { _id, packageName, categoryName, rating, reviewDetails } = review;
  return (
    <tr>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-warning">
          X
        </button>
      </td>
      <td>{packageName}</td>
      <td>{categoryName}</td>
      <td>{rating}</td>
      <td>{reviewDetails}</td>
    </tr>
  );
};

export default ReviewRow;
