import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { googleUser, setUser,userLogin } = useContext(AuthContext);
  //  google
  const handleGoogleUser = () => {
    googleUser()
      .then((data) => {
        // console.log(data.user);
        // setUser(data.user);
        navigate("/");
      })
      .then((error) => {
        // console.log(error);
        toast.error("Login Error")
      });
  };

  // github user
  const handleGithubLohIn = () => {};
 const location=useLocation()
//  console.log(location)
  // form user
  const handleFrom = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email,password)
    .then(data=>{
      // console.log(data.user)
      setUser(data.user);
      // navigate("/");
      navigate(location?.state ? location.state : "/")
    })
    .then(error=>{
      // console.log(error.message)
      toast.error("User Error")
    })


  };
  return (
    <div>
      <div className="min-h-screen mx-auto bg-gray-600 flex justify-center items-center">
        <div className=" flex justify-center items-center w-[700px] flex-col   bg-gray-200  p-20 rounded-xl shadow-md *:text-xl">
          <div className="  w-full">
            <form onSubmit={handleFrom} className="space-y-8">
              <div>
                <label className="text-gray-700 font-semibold text-2xl">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="text-gray-700 font-semibold text-2xl">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border bg-white rounded-md mt-1 focus:ring focus:ring-blue-300"
                />
              </div>
              {/* {
                errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>
             } */}
              <button
                type="submit"
                className="w-full text-2xl  bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
              >
                Log In
              </button>
            </form>
          </div>
          <p className="text-gray-600 text-center  mt-8 leading-loose">
            You don`t have a Account?{" "}
            <Link className="text-red-600 text-xl" to={"/Register"}>
              {" "}
              Register
            </Link>{" "}
          </p>

          <div className="md:flex gap-6 pt-10">
            <button
              onClick={handleGoogleUser}
              className="text-xl btn btn-ghost font-medium text-gray-600 hover:text-sky-500 "
            >
              <p className="text-2xl text-sky-500">
                <FaGoogle></FaGoogle>
              </p>{" "}
              Sign In With Google{" "}
            </button>

            <Link
              onClick={handleGithubLohIn}
              className="text-xl btn btn-ghost font-medium text-gray-600 hover:text-sky-500 "
            >
              <p className="text-2xl text-sky-500">
                <FaGithub></FaGithub>
              </p>{" "}
              Sign In With GitHub{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
