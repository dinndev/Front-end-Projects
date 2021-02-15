import React, { useRef, useState, useEffect } from "react";
import { useSpotifyData } from "./SpotifyProvider";

function TrackPlaying({
  trackName,
  images,
  artist,
  preview,
  nextSong,
  prevSong,
  currentIndex,
}) {
  const [currentPlaying, setCurrentPlaying] = useState({
    preview,
    artist,
    images,
    trackName,
  });
  const [{ playing }, dispatch] = useSpotifyData();
  const audioRef = useRef();
  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing, preview]);

  return (
    <div className="transition player-board items-center w-full lg:h-full lg:justify-start xl:h-3/5 xl:justify-evenly xl:pt-2 xl:pb-10 lg:mt-0 mt-2 flex flex-col justify-center h-full">
      <audio loop src={preview} ref={audioRef} />
      <div className=" shadow-2xl transition mt-2 lg:mt-0 player items-center relative flex flex-col justify-evenly sm:w-2/5 w-9/12 md:w-3/5 xl:h-4/5 5 xl:w-3/4 lg:w-4/5 lg:h-2/4 p-2 h-4/5 rounded-xl">
        <img
          className={`track-album-art ${
            playing ? "animate-music" : "animate-none"
          } shadow-2xl object-fill md:w-32 md:h-32 2xl:w-56 2xl:h-56 lg:w-40 lg:h-40 my-2 rounded-full w-32 h-32 sm:w-36 sm:h-36 xl:w-44 xl:h-44`}
          src={images}
          alt=""
        />
        <div className="bg-white lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 circle xl:top-20 2xl:top-28 rounded-full w-12 h-12 md:top-14 lg:top-20 top-14 absolute"></div>
        <p className="title text-xs sm:text-sm text-secondary font-bold">
          {trackName}
        </p>
        <p className="album-name text-xs text-gray-400">{artist}</p>
        <div className="length flex justify-between px-4 text-gray-400 items-center h-10 text-xs w-full"></div>
      </div>
      <div className=" w-full controls flex lg:h-1/5 justify-center items-center">
        <svg
          onClick={prevSong}
          className={`w-4 h-4 2xl:w-6 2xl:h-6 cursor-pointer fill-current  ${
            currentIndex === 0 ? "text-gray-300" : "text-blue-600"
          }`}
          viewBox="0 0 46 36"
        >
          <path d="M41 .68L24.6 14V3.05a3 3 0 00-5-2.37l-18.51 15a3 3 0 000 4.74l18.51 15a3 3 0 005-2.37V22L41 35.32A3 3 0 0046 33V3.05a3 3 0 00-5-2.37z" />
        </svg>

        <div className="mx-6 wrapper 2xl:w-6 2xl:h-6 cursor-pointer flex items-center h-10 w-10 justify-center rounded-full bg-gray-100">
          <div
            onClick={() => {
              dispatch({
                type: "SET_PLAYING",
                playing: !playing,
              });
            }}
            className="circle-wrapper rounded-full bg-white w-7 h-7 items-center flex justify-center"
          >
            {playing ? (
              <svg
                className="fill-current 2xl:w-6 2xl:h-6 text-blue-600 w-3 h-3"
                viewBox="0 0 47.607 47.607"
              >
                <path d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 320.001 320.001"
                className="h-3 w-3  2xl:w-6 2xl:h-6 fill-current cursor-pointer text-blue-600 col-span-1"
              >
                <path d="M295.84 146.049l-256-144a16.026 16.026 0 00-15.904.128A15.986 15.986 0 0016 16.001v288a15.986 15.986 0 007.936 13.824A16.144 16.144 0 0032 320.001c2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z" />
              </svg>
            )}
          </div>
        </div>
        <svg
          onClick={nextSong}
          className="w-4 h-4 2xl:w-6 2xl:h-6 text-blue-600 cursor-pointer transform rotate-180 fill-current "
          viewBox="0 0 46 36"
        >
          <path d="M41 .68L24.6 14V3.05a3 3 0 00-5-2.37l-18.51 15a3 3 0 000 4.74l18.51 15a3 3 0 005-2.37V22L41 35.32A3 3 0 0046 33V3.05a3 3 0 00-5-2.37z" />
        </svg>
      </div>
    </div>
  );
}

export default TrackPlaying;
