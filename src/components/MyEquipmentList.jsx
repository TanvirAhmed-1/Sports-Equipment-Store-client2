import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
  const loaderData = useLoaderData();
  const [userdata, setData] = useState(loaderData);

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              const remaining = userdata.filter((value) => value._id !== id);
              setData(remaining);

              Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: "Product deleted successfully!",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-white lg:min-h-screen min-h-full ">
      <div></div>
      <div className="w-11/12 mx-auto border-2 border-solid border-black bg-white text-slate-600 text-xl font-medium">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-xl font-semibold text-black text-center">
              <tr>
                <th>Number</th>
                <th>Product Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((value, index) => (
                <tr className="text-center" key={value._id}>
                  <th>{index + 1}</th>
                  <td>{value.itemName}</td>
                  <td>{value.categoryName}</td>
                  <td>{value.price}</td>
                  <td>{value.rating}</td>
                  <td>
                    <button
                      onClick={() => deleteProduct(value._id)}
                      className="btn btn-ghost text-red-400 text-2xl"
                    >
                      <MdDelete />
                    </button>
                  </td>
                  <td>
                    <Link to={`/update/${value._id}`}>
                      {" "}
                      <button className="btn btn-ghost text-sky-400 text-2xl">
                        <FaPen />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentList;
