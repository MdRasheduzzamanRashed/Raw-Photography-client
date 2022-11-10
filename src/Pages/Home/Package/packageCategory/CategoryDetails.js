import React from "react";

const CategoryDetails = ({ img, raw, edImg }) => {
  return (
    <table className="table table-zebra w-full text-center my-5">
      <thead>
        <tr className="hover">
          <th>Photo Size</th>
          <th>Print</th>
          <th>Frame</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover">
          <td>10R</td>
          <td>Printed</td>
          <td>With Frame</td>
          <td>{img.R10}</td>
        </tr>
        <tr className="hover">
          <td>5R</td>
          <td>Printed</td>
          <td>No Frame</td>
          <td>{img.R5}</td>
        </tr>
        <tr className="hover">
          <td>3R</td>
          <td>Printed</td>
          <td>No Frame</td>
          <td>{img.R3}</td>
        </tr>
        <tr className="hover">
          <td>Edited Images</td>
          <td>Not Printed</td>
          <td>No Frame</td>
          <td>{edImg}</td>
        </tr>
        <tr className="hover">
          <td>Raw Images</td>
          <td>Not Printed</td>
          <td>No Frame</td>
          <td>{raw}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CategoryDetails;
