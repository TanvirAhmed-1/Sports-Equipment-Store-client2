import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    
    const Data = {
      image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };

    // console.log("Submitted Data:", Data);

    fetch(`http://localhost:5000/products/${loaderData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.matchedCount>0){
          toast.success("Data Update is Successful")
        }
      });
  };

  return (
    <div className="bg-[#F4F8D3]  pb-40">
      <div className="text-center py-20">
        <h1 className="lg:text-5xl  text-3xl font-semibold text-gray-800 py-3">
          Update Your Product
        </h1>
        <p className="mt-2 text-gray-600 lg:text-2xl text-xl font-semibold">
          Fill in the details below to Update your product information to your
          store.
        </p>
      </div>
      <div className="lg:w-8/12 mx-auto  bg-white p-10 md:p-14 md:py-20 rounded-xl shadow-lg">
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
                defaultValue={loaderData.image || ""}
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Item Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                defaultValue={loaderData.itemName || ""}
                className="w-full px-4 py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category Name
              </label>
              <select
                name="categoryName"
                className="w-full px-4 *:text-black py-3 my-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={loaderData.categoryName || ""}
                required
              >
                <option value="">Select a category</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Cricket">Cricket</option>
                <option value="Shoes & Boot">Shoes & Boot</option>
                <option value="Football">Football</option>
                <option value="Fitness">Fitness</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={loaderData.price || ""}
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
                type="number"
                name="rating"
                min="1"
                max="5"
                defaultValue={loaderData.rating || ""}
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
                defaultValue={loaderData.customization || ""}
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
                defaultValue={loaderData.processingTime || ""}
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
                defaultValue={loaderData.stockStatus || ""}
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
              rows="4"
              defaultValue={loaderData.description || ""}
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
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
