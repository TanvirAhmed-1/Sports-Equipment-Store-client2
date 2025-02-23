import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import MyCard from "./MyCard";

const MyEquipmentList = () => {
  const loaderData = useLoaderData();
  const [userdata, setData] = useState(loaderData);

  const deleteProduct = (id) => {
    console.log(id)
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
      <div className=" lg:min-h-screen gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 bg-slate-400 ">
        {
          userdata.map(value=><MyCard
          key={value._id}
          product={value}
          deleteProduct={deleteProduct}
          ></MyCard>)

        }
      </div>
    </div>
  );
};

export default MyEquipmentList;
