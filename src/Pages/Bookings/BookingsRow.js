import React, { useEffect, useState } from "react";

const BookingsRow = ({ booking, handleDelete }) => {
  const [bookingPackage, setBookingPackage] = useState({});

  console.log(booking);
  const { _id, packageName, categoryName, fee, duration } = booking;

  return (
    <tr>
      <td>
        <button onClick={()=>handleDelete(_id)} className='btn btn-warning'>X</button>
      </td>
      <td>{packageName}</td>
      <td>{categoryName}</td>
      <td>{duration}</td>
      <td>{fee}</td>
    </tr>
  );
};

export default BookingsRow;
