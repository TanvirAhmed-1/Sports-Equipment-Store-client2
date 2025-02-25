import { product } from "prelude-ls";
import React from "react";
import { Link } from "react-router";

const ProductCard = ({ Products }) => {
  console.log(Products);

  const { _id, rating, price, itemName, image } = Products;

  return (
    <div className=" card bg-white md:w-80 w-72 shadow-xl p-6 border-[#F3F3F3] border-2 grid justify-center items-center mx-auto">
      <figure className=" md:w-[282px]  bg-[#F3F3F3] rounded-2xl">
        <img
          src={image}
          alt={itemName}
          className="object-cover w-full"
        />
      </figure>
      <div className="flex flex-col justify-start items-start p-4">
        <h2 className="card-title">
          <h3 className="font-bold text-2xl pt-2 text-black">{itemName}</h3>
        </h2>

        <div className="flex flex-row-reverse">
          <p className="text-gray-500 text-xl font-medium pt-3">{rating}</p>
          <div>
            <div className="rating">
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
        </div>

        <p className="text-gray-500 text-xl font-medium pt-3">Price: {price}</p>

        <div className="flex justify-start items-center">
          <Link to={`/products/${_id}`}>
            <button className="border-2 border-solid hover:bg-gray-200 btn border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-4 text-xl font-bold text-[#9538E2] rounded-3xl bg-white btn-primary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
