import "./App.css";
import React from "react";

function Shadew({ blur, src, offset }) {
  return (
    <div className="container">
      <img src={src} className="test" alt="img" />
      <img
        className="image-shadow"
        style={{
          filter: `blur(${blur})`,
          top: offset.top,
          left: offset.left,
          bottom: offset.bottom,
          right: offset.right,
        }}
        src={src}
        alt="img"
      />
    </div>
  );
}

export default Shadew;
