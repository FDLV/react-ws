import React, { useState, useEffect } from 'react'
import { HexColorPicker } from "react-colorful"
import Circle from "./components/Circle"

import './App.css';

function App() {

  function palleteVis() {
    if (vis === "hidden") {
      setVis("visible")
    }
    else {
      setVis("hidden")
    }
    console.log("asdf12")
  }

  const [count, setCount] = useState(0);
  const [pixels, setPixels] = useState(50);
  const [vis, setVis] = useState("hidden");
  const [color, setColor] = useState("#aabbcc");


  const Footer = {
    paddingTop: ((60 - pixels)/2).toString()+"px",
    paddingLeft: "calc((100vw - "+pixels.toString()+"px)/2)",
    color: "white",
    height: pixels,
    fontSize: "16px",
    textAlign: "center",
    textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00a2ff, 0 0 70px #00a2ff, 0 0 80px #00a2ff, 0 0 100px #00a2ff, 0 0 150px #00a2ff"
  }

  const palette = {
    position: "fixed",
    bottom: "15px",
    visibility: vis,
    left: "calc((100vw - "+pixels.toString()+"px)/2 + 75px)"
  }

  const RoundDiv = {
    width: pixels,
    height: pixels,
    borderRadius: "50px",
    cursor: "pointer"
  }



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count + 1)
  //     console.log(count)
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [count]);

  return (
    <div className="App">
      <HexColorPicker style={palette} color={color} onChange={setColor} />
      <div className="Header">
        Привет
      </div>
      <canvas className="Main">
      </canvas>
      <div style={Footer}>
        <div style={RoundDiv} onClick={() => {palleteVis()}}>
          <Circle diameter={pixels.toString()+"px"} />
        </div>        
      </div>
    </div>
  );
}

export default App;
