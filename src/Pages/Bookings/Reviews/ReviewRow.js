import React from "react";

const ReviewRow = ({ review, handleDelete }) => {
  const { _id, packageName, rating, rev } = review;
  return (
    <tr>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-warning">
          X
        </button>
      </td>
      <td>{packageName}</td>
      <td>{rating}</td>
      <td>{rev}</td>
    </tr>
  );
};

export default ReviewRow;
