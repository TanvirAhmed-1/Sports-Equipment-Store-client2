import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const MyCard = ({ product,deleteProduct }) => {
  console.log(product);

  const {
    _id,
    rating,
    price,
    itemName,
    image,
    categoryName,
    processingTime,
    stockStatus,
  } = product;

  return (
    <div className="card bg-white md:w-auto w-72 shadow-xl p-6 border-[#F3F3F3] border-2 grid justify-center items-center mx-auto">
      <figure className="w-[200px] h-[200px] mx-auto  bg-[#F3F3F3] rounded-2xl flex justify-center items-center">
        <img
          src={image}
          alt={itemName}
          className="object-cover w-full rounded-xl"
        />
      </figure>
      <div className="flex flex-col justify-start items-start p-4">
        <h2 className=" card-title">
          <h3 className="font-bold  text-xl pt-2 text-black">{itemName}</h3>
        </h2>

        <div className="">
          <p className="text-gray-500 text=lg font-medium pt-3">
            Rating: {rating}
          </p>
        </div>

        <p className="text-gray-500 text-lg font-medium pt-3">Price: {price}</p>
        <p className="text-gray-500 text-lg font-medium pt-3">
          Category Name: {categoryName}
        </p>
        <p className="text-gray-500 text-lg font-medium pt-3">
          Process Time: {processingTime}
        </p>
        <p className="text-gray-500 text-lg font-medium pt-3">
          Stock Status: {stockStatus}
        </p>

        <div className="flex gap-4 mt-6 items-center">
          <button
            onClick={() => deleteProduct(_id)}
            className="btn bg-slate-300 btn-ghost text-red-400 text-2xl"
          >
            <span className="text-lg text-sky-600 font-medium">Delete</span> <MdDelete />
          </button>

          <Link className="flex justify-center items-center" to={`/update/${_id}`}>
            {" "}
            <button className="btn bg-slate-300 btn-ghost text-black text-xl">
            <span className="text-lg text-sky-600 font-medium">Update</span> <FaPen />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
