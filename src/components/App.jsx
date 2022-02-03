import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOut = () => setMouseOver(false);

  const handleMouseOver = () => setMouseOver(true);

  const handleClick = () => setHeadingText("Hello");

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
