import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //inline style
  const headingStyle = {
    color: "red",
    fontSize: "20px",
    fontStyle: "italic",
  };
  const anotherStyle = {
    backgroundColor: "#A2F9A1",
    fontSize: "50px",
  };
  //merge 2 styles
  const finalStyle = {
    ...headingStyle,
    ...anotherStyle,
  };
  //for partial merge
  const { color, fontStyle } = headingStyle;
  const partialStyle = {
    color,
    fontStyle,
    ...anotherStyle,
  };

  //Style for container
  const containerStyle = {
    border: "2px solid skyblue",
    backgroundColor: "gray",
  };

  // return (
  //   <div style={containerStyle}>
  //     <h1 style={finalStyle}>Hello! My name is Anand</h1>
  //   </div>
  // );

  //External Style
  //Use inline style for dynamic values
  const isRed = true;
  return (
    <div className="container">
      <h1 className="heading-element" style={{ color: isRed ? "red" : "yellow" }}>
        Hello! My name is Anand
      </h1>
    </div>
  );
}

export default App;
