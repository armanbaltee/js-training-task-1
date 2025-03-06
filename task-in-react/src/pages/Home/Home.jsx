import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bgImage from "../../assets/hero.png";

const Home = () => {
  return (
    <>
      <div
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-5xl font-bold text-white pt-20 pl-20">
          Innovating the Future of <br />
          Technology.
        </h1>
        <p className="text-3xl text-white font-semibold pt-5 pl-20">
          Leading-edge solutions for businesses and <br /> individuals.
        </p>
        <div className="flex gap-2 pl-20 pt-5">
          <button className=" p-2 rounded-lg bg-white text-blue-900 shadow-lg font-mono ">
            Contact us
          </button>
          <button className="pl-3 gap-2 p-2 rounded-lg bg-transparent border text-white shadow-lg font-mono">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
