import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/Header";
import MusicPlayer from "./Components/MusicPlayer";
import React from "react";

function App() {
  // const [{ token }, dispatch] = useSpotifyData();
  return (
    <div className="App flex h-full w-full bg-gray-100">
      <Router>
        <Switch>
          <Nav />
        </Switch>
        <div className="main-contents flex flex-col w-full h-full md:h-screen mx-6">
          <Header />
          <MusicPlayer />
        </div>
      </Router>
    </div>
  );
}

export default App;
