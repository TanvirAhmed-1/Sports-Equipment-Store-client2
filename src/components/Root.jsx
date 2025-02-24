import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavSlider from "./NavSlider";
import Home from "./Home";

const Root = () => {
  return (
    <div className="bg-slate-300 w-12/13 mx-auto">
      <nav className="">
        <NavBar></NavBar>
      </nav>
      {/* <section className="">
        <NavSlider></NavSlider>
      </section> */}
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
