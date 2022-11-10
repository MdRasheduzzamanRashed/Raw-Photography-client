import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/review">
          <button onClick={() => handleReview(packageName)}>Review</button>
        </Link>
      </td>
    </tr>
  );
};

export default BookingsRow;
