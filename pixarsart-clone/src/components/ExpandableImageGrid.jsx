import React from "react";

const projects = [
  { title: "World Economic Forum", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "Hyprov", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "Margot Community", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "Pixie Cup", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "Legends of the Galaxy", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "Women Entrepreneurs", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "Stampbox", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "Point App", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
  { title: "FixTrack", img: "../assets/SliderImgae/Hyprov-1-1.jpg" },
];

const ExpandableImageGrid = () => {
  return (
    <div className="flex overflow-hidden h-[400px]">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative flex-1 transition-all duration-500 ease-in-out hover:flex-[3]"
          style={{
            backgroundImage: `url(${project.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity"></div>
          <h3 className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold px-4 text-center group-hover:text-2xl transition-all">
            {project.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandableImageGrid;
