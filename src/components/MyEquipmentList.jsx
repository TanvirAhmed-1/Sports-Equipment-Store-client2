import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import MyCard from "./MyCard";
import { AuthContext } from "./AuthProvider";

const MyEquipmentList = () => {

  const [userdata, setData] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json()) 
      .then((data) => {
        console.log(data);  
        setData(data);  
      })
      .catch((error) => {
        console.error("Error fetching user data:", error); 
      });

  }, [user?.email]);



  const deleteProduct = (id) => {
    console.log(id);
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
    <div className="bg-white dark:bg-black dark:text-white lg:min-h-screen min-h-full ">
      <div className="pt-20">
        <h1 className="text-center md:text-5xl text-2xl dark:text-white text-black font-bold">Your Products</h1>
        <p className="md:text-xl text-center my-4  text-lg font-medium dark:text-white text-gray-600">These are all your products. You can view product details, update, and delete them.</p>
      </div>
      <div className=" lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20 px-10  ">
        {userdata.map((value) => (
          <MyCard
            key={value._id}
            product={value}
            deleteProduct={deleteProduct}
          ></MyCard>
        ))}
      </div>
    </div>
  );
};

export default MyEquipmentList;
