import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login";
import reportWebVitals from "./reportWebVitals";
import "./tailwind.output.css";
import { SpotifyProvider } from "./Components/SpotifyProvider";
import reducer, { initialState } from "./Components/reducer";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SpotifyProvider reducer={reducer} initialState={initialState}>
      <App />
    </SpotifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
