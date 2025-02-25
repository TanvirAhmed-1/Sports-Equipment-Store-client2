import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const idData = useLoaderData();
  // console.log(idData);


  return (
    <div>
      <div className="card lg:card-side dark:bg-gray-800 bg-yellow-100 shadow-xl p-10">
        <figure className="w-[400px] h-[400px] p-6">
          <img src={idData.image} className="object-cover rounded-xl " alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl dark:text-white font-bold text-gray-700">
            {idData.itemName}
          </h2>
          <h2 className="text-xl dark:text-white font-semibold text-gray-500">
            {idData.categoryName}
          </h2>
          <p className="text-lg dark:text-white font-medium text-black">
           Process Time: {idData.processingTime}
          </p>
          <p className="text-lg dark:text-white font-medium text-black">Stock: {idData.stockStatus}</p>
          <p className="text-lg dark:text-white font-medium text-black">Price: {idData.price}</p>
          <div className="flex  justify-end flex-row-reverse items-center gap-6">
            <div>
            <p className="text-black text-xl dark:text-white mb-2 font-medium pt-3"> {idData.rating}</p>
            </div>
              <div className="rating flex justify-center items-center">
                <p className="mr-4 mb-2 dark:text-white text-black text-lg font-medium pt-3">Rating:</p>
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
          <p className="text-lg dark:text-white font-medium text-black">Description:  {idData.description}</p>

          <div className="card-actions lg:gap-20 justify-start py-4">
            <Link to={"/"}>
              <button onClick={()=> toast("Thank you")} className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
