import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useEffect } from "react";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
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
      .then((data) => setBookings(data));
  }, [user?.email]);
  console.log(bookings);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this booking"
    );
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("raw-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter((odr) => odr._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className=" text-3xl text-center font-bold my-5">Your Bookings</h2>
      <div className="overflow-x-auto w-full">
        <table className="table table-auto w-full">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Package Name</th>
              <th>Category Name</th>
              <th>Duration</th>
              <th>Package Fee</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={bookings._id}
                booking={booking}
                handleDelete={handleDelete}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
