import React from "react";
import { useLoaderData } from "react-router";

const MyEquipmentList = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const deleteProduct = (id) => {
    fetch(``, {
      method: "DELETE",
    }).then((res) => res.json()),
      then((data) => {
        console.log(data);
      });
  };

  image, itemName, categoryName, description, price, rating;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {loaderData.map(value, (index) => (
              <tr key={value._id}>
                <th>{index + 1}</th>
                <td>{value.itemName}</td>
                <td>{value.categoryName}</td>
                <td>{value.price}</td>
                <td>{value.rating}</td>
                <td>
                  <button>Delete</button>
                </td>
                <td>
                  <butt>Update</butt>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEquipmentList;
