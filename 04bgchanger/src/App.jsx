import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 max-w-2xl">
        <button onClick={() => changeColor("red")} className="text-white">
          red
        </button>
        <button onClick={() => changeColor("green")} className="text-white">
          green
        </button>
        <button onClick={() => changeColor("white")} className="text-white">
          white
        </button>
        <button onClick={() => changeColor("black")} className="text-white">
          black
        </button>
      </div>
    </div>
  );
}

export default App;
