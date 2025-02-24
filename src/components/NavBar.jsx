import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "./AuthProvider";

const NavBar = () => {
  const { user, setUser, userSignOut } = useContext(AuthContext);
  const handleLogOUT = () => {
    userSignOut()
      .then((data) => {
        console.log(data.user);
        setUser(data.user);
      })
      .then((error) => {
        console.log(error.message);
      });
  };
  const link = (
    <nav className=" w-full mx-auto md:px-8 ">
      <div className=" flex lg:flex-row p-4  flex-col lg:gap-8  md:gap-5 gap-4 text-2xl font-medium leading-none text-gray-400">
        <NavLink to="/" className="hover:text-green-300 transition">
          Home
        </NavLink>

        <NavLink to="/AllSports" className="hover:text-green-300 transition">
          All Sports Equipment
        </NavLink>
        <NavLink to="/addProduct" className="hover:text-green-300 transition">
          Add Product
        </NavLink>
        {user && (
          <NavLink to="/equipment" className="hover:text-green-300 transition">
            My Equipment
          </NavLink>
        )}
        <NavLink to="/about" className="hover:text-green-300 transition">
          About Us
        </NavLink>
        <NavLink to="/contact" className="hover:text-green-300 transition">
          Contact Us
        </NavLink>
      </div>
    </nav>
  );

  return (
    <div>
      <div className="navbar bg-sky-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-gray-300 btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu   menu-sm dropdown-content bg-gray-200 rounded-box z-[10]  mt-3 w-60 p-2 shadow"
            >
              {link}
            </ul>
          </div>

          <div className=" flex items-center justify-center ml-6">
            <img
              className="object-cover w-24 rounded-3xl"
              src={logo}
              alt=""
              srcset=""
            />
            {/* <a className="btn btn-ghost text-xl">VictoryZone</a> */}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user && user.email ? (
            <div className="dropdown dropdown-hover flex gap-4 justify-center items-center">
              <div>
                <p className="text-lg font-medium text-gray-200">{user.displayName}</p>
              </div>
              <div>
                <div tabIndex={0} role="button" className="btn m-1">
                  {" "}
                  img
                  <img src="" alt="" srcset="" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-gray-200 rounded-box z-[10] w-20 shadow"
                >
                  <li>
                    {/* <a>Loge Out</a> */}
                    <button className="text-sm" onClick={handleLogOUT}> Loge Out</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <a className="btn">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
