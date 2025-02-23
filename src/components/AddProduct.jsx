import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

const AddProduct = () => {

  const {user}=useContext(AuthContext)

  console.log(user.displayName,    user.email)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value; // This will now come from the dropdown
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const formData = {
      image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
    };
    console.log("Submitted Data:", formData);
    
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Data Successfully Added to Server");
        }
        form.reset();
      });
  };

  return (
    <div className="bg-[#dfe0d4]  pb-40">
      <div className="text-center py-20">
        <h1 className="lg:text-5xl  text-3xl font-semibold text-gray-800 py-3">
          Add New Product
        </h1>
        <p className="mt-2 text-gray-600 lg:text-2xl text-xl font-semibold">
          Fill in the details below to add a new product to your store. All
          fields marked with are required.
        </p>
      </div>
      <div className="w-8/12 mx-auto  bg-white p-10 md:p-14 md:py-20 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Item Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Title
              </label>
              <input
                type="text"
                name="itemName"
                placeholder="Enter Your Product Title"
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Category Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category Name
              </label>
              <select
                name="categoryName"
                className="w-full px-4 *:text-black py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="Food">Volleyball</option>
                <option value="Food">Cricket</option>
                <option value="Food">Shoes & Boot</option>
                <option value="Fitness">Football</option>
                <option value="Fitness">More</option>
                <option value="Shoes & Boots">Fitness</option>
                {/* Add more categories as needed */}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="w-full px-4 py-3 my-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating (1-5)
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter rating"
                min="1"
                max="5"
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Customization */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customization
              </label>
              <input
                type="text"
                name="customization"
                placeholder="Enter customization details"
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Processing Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                placeholder="Enter processing time (e.g., 3 days)"
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Stock Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available Quantity
              </label>
              <input
                type="number"
                name="stockStatus"
                placeholder="Enter available quantity"
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* User Email (Read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={user.email}
                readOnly
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* User Name (Read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user.displayName}
                readOnly
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description (Full Width) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              rows="4"
              className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
