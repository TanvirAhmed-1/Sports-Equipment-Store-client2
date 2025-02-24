import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Root = () => {
  return (
    <div className="bg-slate-300 w-12/13 mx-auto">
      <nav>
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
