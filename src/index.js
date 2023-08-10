import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <div className="max-w-[390px] h-fit flex flex-col items-center justify-center mx-auto bg-black">
  //   <App />
  // </div>
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="max-w-[390px] h-fit flex flex-col items-center justify-center mx-auto bg-black">
      <Switch>
        <Route path="/" element={<App />} />
      </Switch>
    </div>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
