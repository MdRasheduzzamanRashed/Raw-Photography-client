import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingsRow = ({ booking, handleDelete }) => {
  const { _id, packageName, categoryName, fee, duration } = booking;
  const { handleReview } = useContext(AuthContext);

  return (
    <tr>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-warning">
          X
        </button>
      </td>
      <td>{packageName}</td>
      <td>{categoryName}</td>
      <td>{duration}</td>
      <td>{fee}</td>
      <td>
        <button onClick={() => handleReview(packageName, categoryName)}>
          Review
        </button>
      </td>
    </tr>
  );
};

export default BookingsRow;
