import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 882px 65.5938px, rgba(46, 29, 72, 0.9) 160px, rgba(0, 0, 0, 0) 150px, rgba(46, 29, 72, 0.9) 160px, rgba(42, 25, 69, 0.95) 25%, rgb(0, 0, 0) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-10">
      <h1 className="text-white text-[50px] font-bold">
        WE'RE THE <span className="text-green-400">FURIOUS</span> DIGITAL
      </h1>
      <motion.h1
        className="text-white font-bold"
        initial={{ fontSize: "80px" }}
        animate={{ fontSize: "120px" }}
        transition={{ delay: 0.1, duration: 0.2, ease: "easeInOut" }}
      >
        ARTISTS
      </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
