import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const idData = useLoaderData();
  console.log(idData);

//   image,
//   itemName,
//   categoryName,
//   description,
//   price,
//   rating,
//   customization,
//   processingTime,
//   stockStatus,
//   userEmail,
//   userName,

  return (
    <div>
      <div className="card lg:card-side bg-yellow-100 shadow-xl">
        <figure>
          <img
            src={idData.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-gray-700">{idData.itemName}</h2>
          <h2 className="text-xl font-semibold text-gray-500">{idData.categoryName}</h2>
          <p className="text-lg font-medium text-black">{idData.processingTime}</p>
          <p className="text-lg font-medium text-black">{idData.stockStatus}</p>
          <p className="text-lg font-medium text-black">{idData.price}</p>
          <p className="text-lg font-medium text-black">{idData.description}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
