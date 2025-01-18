import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
function MyApp() {
  return (
    <>
      <h1>Custom react app</h1>
    </>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">,
    Visit Google
  </a>
);

ReactDOM.createRoot(document.getElementById("root").render(<AnotherElement />));
