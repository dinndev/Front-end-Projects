import React, { useEffect } from "react";
import { useSpotifyData } from "./SpotifyProvider";
import Rows from "./Rows";
import "./CostumStyle/musicPlayer.css";
import TrackLists from "./TrackLists";
import TrackPlaying from "./TrackPlaying";
import axios from "axios";
import { albumFilter, trackFilter } from "./helperFuctions";
require("dotenv").config();
function MusicPlayer() {
  // Get the value of the input as a query params
  const [
    { playLists, trackLists, trackPlaying, input },
    dispatch,
  ] = useSpotifyData();
  // Api call every changes on input
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: input },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(async (res) => {
        const data = await res.data.data;
        const singleData = [
          {
            images: data[0].album.cover_medium,
            preview: data[0].preview,
            id: data[0].id,
            trackName: data[0].title,
            duration: data[0].duration,
            artist: data[0].artist.name,
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
          type: "SET_TRACK_PLAYING",
          trackPlaying: singleData,
        });
      })
      .catch((err) => console.log(err));
  }, [input]);
  return (
    <div className="billboard-rows h-full select-none w-full overflow-x-visible lg:overflow-hidden">
      <h2 className="font-bold h-10 text-md sm:text-lg text-left">Albums</h2>
      <ul className="items-center sm:h-1/3 md:h-1/4 lg:h-1/3 2xl:w-full flex sm:justify-start overflow-y-hidden overflow-x-scroll w-full whitespace-nowrap h-2/6 rows">
        {playLists
          ? albumFilter(playLists).map(({ image, title, trackLists, id }) => {
              return (
                <Rows
                  key={id}
                  image={image}
                  tracks={trackLists}
                  title={title}
                />
              );
            })
          : "Not found"}
      </ul>
      <p className="font-bold h-7 lg:block hidden text-md sm:text-lg my-3 md:m-2 text-left">
        Tracks
      </p>
      <div className="flex-col lg:flex-row flex w-full h-1/2 md:h-3/4">
        <p className="font-bold h-7 lg:hidden text-md sm:text-lg my-5 md:m-2 text-left">
          Tracks
        </p>
        <div className="album-tracks mr-4 flex-col flex  h-56 w-full lg:h-full sm:w-full md:h-2/5 lg:w-3/5 overflow-y-scroll">
          {trackLists
            ? trackFilter(trackLists).map(
                ({ id, duration, title, artist, image, preview }, index) => {
                  return (
                    <TrackLists
                      key={id}
                      duration={duration}
                      trackName={title}
                      artist={artist.name}
                      length={index + 1}
                      images={image}
                      preview={preview}
                    />
                  );
                }
              )
            : "Not Found"}
        </div>
        <div className="player-board w-full sm:w-full lg:mt-0 md:mt-6 lg:w-2/5 flex flex-col md:h-1/2 lg:h-full h-full">
          <p className="font-bold lg:hidden h-7 flex flex-col md:m-2 text-md sm:text-lg my-3 text-left">
            Track Playing
          </p>
          {Array.from(trackPlaying).map(
            ({ artist, id, trackName, duration, images, preview }) => {
              return (
                <TrackPlaying
                  images={images}
                  key={id}
                  artist={artist}
                  id={id}
                  trackName={trackName}
                  duration={duration}
                  preview={preview}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
export default MusicPlayer;
