import React, { useEffect, useState } from "react";
import "../assets/css/cursorwithshadow.css";

const CursorWithShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-background"
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className="cursor-shadow"
        style={{ left: position.x, top: position.y }}
      ></div>
    </>
  );
};

export default CursorWithShadow;
