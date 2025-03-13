import React from "react";
import "../assets/css/homepage.css";

import WEF from "../assets/images/WEF.jpg";
import Hyprov from "../assets/images/Hyprov-1-1.jpg";
import Margot from "../assets/images/Margot-Community-1-1.png";
import Pixie from "../assets/images/Pixie-Cup-1-1-1.jpg";
import LotG from "../assets/images/Legends-of-the-Galaxy-1-1.jpg";
import WE from "../assets/images/Legends-of-the-Galaxy-2-1-1.png";
import Stampbox from "../assets/images/Wix.png";
import PointApp from "../assets/images/image-19.jpg";
import FixTrack from "../assets/images/Fixtrack-1.png";

const projects = [
  { title: "World Economic Forum", img: WEF },
  { title: "Hyprov", img: Hyprov },
  { title: "Margot Community", img: Margot },
  { title: "Pixie Cup", img: Pixie },
  { title: "Legends of the Galaxy", img: LotG },
  { title: "Women Entrepreneurs", img: WE },
  { title: "Stampbox", img: Stampbox },
  { title: "Point App", img: PointApp },
  { title: "FixTrack", img: FixTrack },
];

const Homepage = () => {
  return (
    <>
      <section className="hero-section">
        <div
          className="content-area"
          style={{
            backgroundImage:
              "radial-gradient(circle at 882px 65.5938px, rgba(46, 29, 72, 0.9) 160px, rgba(0, 0, 0, 0) 150px, rgba(46, 29, 72, 0.9) 160px, rgba(42, 25, 69, 0.95) 25%, rgb(0, 0, 0) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content">
            <h1 className="main-heading">
              WE'RE THE <span className="furious">FURIOUS</span> DIGITAL
            </h1>
            <div className="main-animation-text">
              {["A", "R", "T", "I", "S", "T", "S"].map((ltr, i) => (
                <h1 key={i} className="text-animation">
                  {ltr}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="image-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid-item"
              style={{ backgroundImage: `url(${project.img})` }}
            >
              <div className="overlay"></div>
              <h3 className="title">{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;
