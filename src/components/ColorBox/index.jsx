import React, { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("box_color") || "green";
    console.log("initialColor", initialColor);
    return initialColor;
  });
  function handleChangeBoxColorClick() {
    //get random new color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor); // luu vao locall storage
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleChangeBoxColorClick}
    ></div>
  );
}

export default ColorBox;
