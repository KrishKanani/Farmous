import React from "react";
import "../styles/Home.css";
import HomeCarousel from "./HomeCarousel";
import HomeTop from "./HomeTop";

const Home = () => {
  return (
    <div className="home">
      <HomeTop />
      {/* <HomeCarousel /> */}
    </div>
  );
};

export default Home;
