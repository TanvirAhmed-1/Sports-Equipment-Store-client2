import React from "react";
import NavSlider from "./NavSlider";
import NavBar from "./NavBar";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
       <nav>
       <NavBar></NavBar>
       </nav>
      <section className="">
        <NavSlider></NavSlider>
      </section>
      <main>
        <Products></Products>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
