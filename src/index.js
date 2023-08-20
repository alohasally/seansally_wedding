import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "./lang/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="max-w-[420px] h-fit flex flex-col items-center justify-center mx-auto bg-black">
    <App />
  </div>
);
