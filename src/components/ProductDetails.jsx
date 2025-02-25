import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const idData = useLoaderData();
  console.log(idData);


  return (
    <div>
      <div className="card lg:card-side bg-yellow-100 shadow-xl p-10">
        <figure className="w-[20%] p-6">
          <img src={idData.image} className="object-cover rounded-xl p-6" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-gray-700">
            {idData.itemName}
          </h2>
          <h2 className="text-xl font-semibold text-gray-500">
            {idData.categoryName}
          </h2>
          <p className="text-lg font-medium text-black">
           Process Time: {idData.processingTime}
          </p>
          <p className="text-lg font-medium text-black">Stock: {idData.stockStatus}</p>
          <p className="text-lg font-medium text-black">Price: {idData.price}</p>
          <div className="flex  justify-end flex-row-reverse items-center gap-6">
            <div>
            <p className="text-black text-xl mb-2 font-medium pt-3"> {idData.rating}</p>
            </div>
              <div className="rating flex justify-center items-center">
                <p className="mr-4 mb-2 text-black text-lg font-medium pt-3">Rating:</p>
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            
          </div>
          <p className="text-lg font-medium text-black">{idData.description}</p>

          <div className="card-actions lg:gap-20 justify-center">
            <Link to={"/"}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
