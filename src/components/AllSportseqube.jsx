import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const AllSportseqube = () => {
  const loaderData = useLoaderData();


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
                <th>Stock Status</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {loaderData.map((value, index) => (
                <tr className="text-center" key={value._id}>
                  <th>{index + 1}</th>
                  <td>{value.itemName}</td>
                  <td>{value.categoryName}</td>
                  <td>{value.price}</td>
                  <td>{value.rating}</td>
                  <td>{value.stockStatus}</td>
                  <td>
                    <Link to={`/details/${value._id}`}>
                      {" "}
                      <button className="btn btn-ghost text-sky-400 text-2xl">
                      <FaEye />
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

export default AllSportseqube;
