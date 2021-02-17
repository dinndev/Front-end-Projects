import React, { useState } from "react";
import { useSpotifyData } from "./SpotifyProvider";
import convert from "convert-seconds";

function TrackLists({
  trackName,
  artist,
  duration,
  images,
  id,
  length,
  preview,
  currentIndex,
}) {
  const [{ likedTracks }, dispatch] = useSpotifyData();
  const handlePlay = () => {
    dispatch({
      type: "SET_TRACK_PLAYING",
      trackPlaying: trackPlayingData,
    });
    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
  };
  const convertion = convert(duration);
  const _duration = `${convertion.minutes}:${convertion.seconds}`;
  const [heartBg, setHeartBg] = useState(false);
  const trackPlayingData = [
    {
      images,
      id,
      artist,
      trackName,
      duration: _duration,
      preview,
    },
  ];

  const handleLikedTracks = () => {
    setHeartBg((prev) => !prev);
    if (!heartBg) {
      dispatch({
        type: "SET_LIKED_TRACKS",
        likedTracks: trackPlayingData,
      });
    } else {
      dispatch({
        type: "SET_LIKED_TRACKS",
        likedTracks: [],
      });
    }
  };
  return (
    <div className="track hover:bg-gray-200 transition-all text-xs sm:text-sm grid grid-cols-10 h-18 p-1 sm:h-16 justify-items-center items-center bg-white rounded-lg my-1 w-full">
      <span className="font-bold text-xs text-secondary">{length}</span>
      <img
        className="rounded-lg object-contain h-12 w-12"
        src={images}
        alt={artist}
      />
      <svg
        viewBox="0 0 320.001 320.001"
        className="z-10 h-3 w-3 fill-current cursor-pointer text-gray-300 col-span-1"
        onClick={handlePlay}
      >
        <path d="M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z" />
      </svg>
      <p
        onClick={handlePlay}
        className="z-0 cursor-pointer col-span-2 font-bold text-secondary"
      >
        {trackName}
      </p>
      <p className="col-span-2 text-gray-400 text-xs">{artist}</p>
      <p className="col-span-2 text-gray-400">{_duration}</p>
      <svg
        onClick={handleLikedTracks}
        className={`transition-all ${
          heartBg ? "text-red-500" : "text-gray-300"
        } fill-current text-xs text-gray-300 h-5 w-5 cursor-pointer`}
        viewBox="0 0 511.868 511.868"
      >
        <path d="M470.45 69.262c-26.753-26.752-62.322-41.485-100.155-41.485-37.834 0-73.403 14.733-100.155 41.486l-14.205 14.205-14.205-14.205c-26.752-26.753-62.321-41.486-100.155-41.486-37.833 0-73.402 14.733-100.155 41.486-55.224 55.224-55.225 145.082-.002 200.308l214.525 214.521 214.51-214.521c55.221-55.227 55.22-145.085-.003-200.309z" />
      </svg>
    </div>
  );
}

export default TrackLists;
