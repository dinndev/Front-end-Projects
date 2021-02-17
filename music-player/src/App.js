import "./App.css";
import Nav from "./Components/Nav";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import MusicPlayer from "./Components/MusicPlayer";
import React from "react";
import LikedSongs from "./Components/ LikedSongs";
import Albums from "./Components/Albums";

function App() {
  return (
    <div className="App flex h-full w-screen bg-gray-100">
      <Router>
        <Nav />
        <div className="main-contents items-start w-full flex flex-col lg:h-screen h-full mx-6">
          <Switch>
            <Route exact path="/">
              <Header />
              <MusicPlayer />
            </Route>
            <Route exact path="/liked">
              <LikedSongs />
            </Route>
            <Route exact path="/albums">
              <Albums />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
