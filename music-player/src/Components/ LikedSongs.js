import React from "react";
import { useSpotifyData } from "./SpotifyProvider";

function LikedSongs() {
  const [{ likedTracks }] = useSpotifyData();
  console.log(likedTracks);
  return <div>ola</div>;
}

export default LikedSongs;
