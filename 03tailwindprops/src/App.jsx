import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Hitesh",
    age: 25,
    address: {
      City: Jaipur,
    },
  };
  let newArr = [1, 2, 3, 4, 5, 7];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with Tailwind</h1>
      <Card />
    </>
  );
}

export default App;
