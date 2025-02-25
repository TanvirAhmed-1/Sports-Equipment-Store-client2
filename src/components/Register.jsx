import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [errorMessage, SetErrorMessage] = useState();
 const {setUser,updateUserProfile,userRegister}=useContext(AuthContext)
 const navigate=useNavigate()
  const [show, setShow] = useState(false);

  const handleFrom = (e) => {
    e.preventDefault();

    SetErrorMessage();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password)
    const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    if (!valid.test(password)) {
      SetErrorMessage(
        "place enter Must have an Uppercase letter, Lowercase letter,at least 6 character"
      );
      return;
    }

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    userRegister(email, password)
      .then((res) => {
        // console.log(res.user)
        setUser(res.user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            // console.log(err);
            toast.error("User photo Not Register")
          });
        toast.success("user successfully signed in");
      })
      .catch((err) => {
        // console.log(err.message)
        toast.error("User Not Register")
        // toast.error("Invalid User", err.message);
      });
  };

  return (
    <div className="min-h-screen mx-auto bg-gray-600 flex justify-center items-center">
      <div className=" flex justify-center items-center w-[700px]  flex-col  bg-gray-200  p-20 rounded-xl shadow-md *:text-xl">
        <div className="  w-full">
          <form onSubmit={handleFrom} className="space-y-8">
            <div>
              <label className="text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Photo Url</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo Url"
                className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="relative">
              <label className="text-gray-700 font-semibold ">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
              />
              <button
                onClick={() => setShow(!show)}
                className="absolute right-10 top-12 text-2xl"
              >
                {show ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full text-2xl  bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
        </div>
        <p className="text-gray-600  mt-8">
          You have a Account?{" "}
          <Link className="text-red-600 text-xl" to={"/login"}>
            {" "}
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
