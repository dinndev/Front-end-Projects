import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSpotifyData } from "./SpotifyProvider";
import Rows from "./Rows";
import "./CostumStyle/musicPlayer.css";
import TrackLists from "./TrackLists";
import TrackPlaying from "./TrackPlaying";
import axios from "axios";
import { useParams } from "react-router-dom";

import {
  albumFilter,
  trackFilter,
  animate,
  exit,
  initial,
  transition,
} from "./helperFuctions";
require("dotenv").config();
function MusicPlayer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  // Get the value of the input as a query params
  const [
    { playLists, trackLists, trackPlaying, input },
    dispatch,
  ] = useSpotifyData();
  const [currentSong, setCurrentSong] = useState(0);
  // Api call every changes on input
  const handleNextSong = useCallback(() => {
    return currentSong >= 15
      ? setCurrentSong(0)
      : setCurrentSong(currentSong + 1);
  }, [currentSong]);

  const handlePrevSong = useCallback(() => {
    console.log("prev");
    if (currentSong === 0) {
      return;
    } else {
      return setCurrentSong(currentSong - 1);
    }
  }, [currentSong]);
  useEffect(() => {
    let cancel;
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: input, limit: 20 },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options, {
        cancenToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then(async (res) => {
        const data = await res.data.data;
        setLoading(false);
        const singleData = [
          {
            images: data[currentSong].album.cover_big,
            preview: data[currentSong].preview,
            id: data[currentSong].id,
            trackName: data[currentSong].title,
            duration: data[currentSong].duration,
            artist: data[currentSong].artist.name,
          },
        ];
        //Set the data to playlists
        dispatch({
          type: "SET_PLAYLIST",
          playLists: data.map(({ album }) => album),
        });
        dispatch({
          type: "SET_TRACKS",
          trackLists: data,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: false,
        });
        dispatch({
          type: "SET_TRACK_PLAYING",
          trackPlaying: singleData,
        });
      })
      .catch((err) => console.log(err));
    return () => cancel();
  }, [currentSong, input, dispatch]);
  return (
    <AnimatePresence>
      {loading ? (
        <h2 className="font-bold h-10 text-md sm:text-lg text-left">
          Loading...
        </h2>
      ) : (
        <div className="billboard-rows h-auto select-none w-full overflow-x-visible lg:overflow-hidden">
          <motion.h2
            transition={{ duration: transition.row }}
            initial={initial}
            animate={animate}
            exit={exit}
            className="font-bold h-10 text-md sm:text-lg text-left"
          >
            Albums
          </motion.h2>
          <motion.ul
            initial={initial}
            transition={{ duration: transition.row }}
            animate={animate}
            exit={exit}
            className="items-center z-0 sm:h-1/3 md:h-1/4 lg:h-1/4 2xl:w-full xl:h-1/3 2xl: flex sm:justify-start overflow-y-hidden overflow-x-scroll whitespace-nowrap h-2/6 rows"
          >
            {albumFilter(playLists).map(({ image, title, trackLists, id }) => {
              return (
                <Rows
                  transition={{ duration: transition.tracks }}
                  key={id}
                  image={image}
                  tracks={trackLists}
                  title={title}
                />
              );
            })}
          </motion.ul>
          <motion.p
            transition={{ duration: transition.player }}
            initial={initial}
            animate={animate}
            exit={exit}
            className="font-bold h-7 lg:block hidden text-md sm:text-lg my-3 md:m-2 text-left"
          >
            Tracks
          </motion.p>
          <div className="flex-col lg:flex-row lg:h-full flex w-full h-1/2 md:h-3/4">
            <motion.p
              transition={{ duration: transition.player }}
              initial={initial}
              animate={animate}
              exit={exit}
              className="font-bold h-7 lg:hidden text-md sm:text-lg my-5 md:m-2 text-left"
            >
              Tracks
            </motion.p>
            <motion.div
              transition={{ duration: transition.player }}
              initial={initial}
              animate={animate}
              exit={exit}
              className="album-tracks mr-4 flex-col flex h-56 w-full lg:h-full sm:w-full lg:w-3/5 overflow-y-scroll"
            >
              {trackFilter(trackLists).map(
                (
                  { id, duration, title, artist, image, preview },
                  index,
                  array
                ) => {
                  return (
                    <TrackLists
                      id={id}
                      key={id}
                      duration={duration}
                      trackName={title}
                      artist={artist.name}
                      length={index + 1}
                      images={image}
                      preview={preview}
                      array={array}
                      currentIndex={currentSong}
                    />
                  );
                }
              )}
            </motion.div>
            <motion.div
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{ duration: transition.player }}
              className="player-board w-full lg:h-full sm:w-full lg:mt-0 md:mt-6 lg:w-2/5 flex flex-col bg-white rounded-b-xl md:rounded-xl md:h-1/2 h-full"
            >
              {Array.from(trackPlaying).map(
                (
                  { artist, id, trackName, duration, images, preview, i },
                  index
                ) => {
                  return (
                    <TrackPlaying
                      nextSong={handleNextSong}
                      prevSong={handlePrevSong}
                      images={images}
                      key="23423523"
                      artist={artist}
                      id={id}
                      trackName={trackName}
                      duration={duration}
                      preview={preview}
                      i={i}
                      firstI={index}
                      currentIndex={currentSong}
                    />
                  );
                }
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default MusicPlayer;
