import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/Header";
import MusicPlayer from "./Components/MusicPlayer";
import React from "react";

function App() {
  return (
    <div className="App flex h-full w-screen bg-gray-100">
      <Router>
        <Switch>
          <Nav />
        </Switch>
        <div className="main-contents flex flex-col lg:h-screen h-full mx-6">
          <Header />
          <MusicPlayer />
        </div>
      </Router>
    </div>
  );
}

export default App;
