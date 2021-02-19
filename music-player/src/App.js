import "./App.css";
import Nav from "./Components/Nav";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import MusicPlayer from "./Components/MusicPlayer";
import React from "react";
import Artists from "./Components/Artists";
import Albums from "./Components/Albums";

function App() {
  return (
    <div className="App relative flex h-full w-screen bg-gray-100">
      <Router>
        <Nav />
        <div className="main-contents items-center lg:items-start w-screen flex mx-4 flex-col lg:h-screen h-full">
          <Header />
          <Switch>
            <Route exact path="/">
              <MusicPlayer />
            </Route>
            <Route exact path="/liked">
              <Artists />
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
