import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import MusicPlayer from "./Components/MusicPlayer";
import { loginUrl } from "./Components/Spotify";
import React, { useEffect } from "react";
import Login from "./Components/Login";
import { useSpotifyData } from "./Components/SpotifyProvider";
import { getTokenfromUrl } from "./Components/Spotify";

function App() {
  const [{ token }, dispatch] = useSpotifyData();
  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    dispatch({
      type: "SET_TOKEN",
      token: _token,
    });
  }, []);
  return (
    <Router>
      {token ? (
        <div className="App flex h-full w-full bg-gray-100">
          <Switch>
            <Nav />
          </Switch>
          <div className="main-contents flex flex-col w-auto h-full md:h-screen mx-6">
            <Header />
            <MusicPlayer />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
