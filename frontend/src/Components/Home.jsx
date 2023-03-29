import React from "react";
import "../styles/Home.css";
import HomeCarousel from "./HomeCarousel";
import HomeTop from "./HomeTop";
import HomePageLoan from "./HomePageLoan";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <HomeTop />
      {/* <HomeCarousel /> */}
      <HomePageLoan />

      
    </div>
  );
};

export default Home;
