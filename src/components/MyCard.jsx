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
    <div className="flex flex-col bg-white md:w-96 w-72 h-full shadow-xl p-6 border-[#F3F3F3] border-2  rounded-lg mx-auto">
      <figure className=" bg-[#F3F3F3] rounded-2xl flex justify-center items-center">
        <img
          src={image}
          alt={itemName}
          className="object-cover w-[124px] h-[166px]"
        />
      </figure>
      <div className="flex flex-col justify-start items-start p-4">
        <h2 className=" grid">
          <h3 className="font-bold text-2xl pt-2 text-black">{itemName}</h3>
        </h2>

        <div className="">
          <p className="text-gray-500 text-xl font-medium pt-3">
            Rating: {rating}
          </p>
        </div>

        <p className="text-gray-500 text-xl font-medium pt-3">Price: {price}</p>
        <p className="text-gray-500 text-xl font-medium pt-3">
          Category Name: {categoryName}
        </p>
        <p className="text-gray-500 text-xl font-medium pt-3">
          Process Time: {processingTime}
        </p>
        <p className="text-gray-500 text-xl font-medium pt-3">
          Stock Status: {stockStatus}
        </p>

        <div className="flex gap-4 mt-6 items-center">
          <button
            onClick={() => deleteProduct(_id)}
            className="btn bg-slate-300 btn-ghost text-red-400 text-2xl"
          >
            <span className="text-lg text-sky-600 font-medium">Delete</span> <MdDelete />
          </button>

          <Link to={`/update/${_id}`}>
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
