import React, { useEffect } from "react";
import { useSpotifyData } from "./SpotifyProvider";
import Rows from "./Rows";
import "./CostumStyle/musicPlayer.css";
import TrackLists from "./TrackLists";
import TrackPlaying from "./TrackPlaying";
import axios from "axios";
import { albumFilter, trackFilter } from "./helperFuctions";

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
      params: { q: input, limit: 10 },
      headers: {
        "x-rapidapi-key": "9e6e4a5fbemsh25f0de29a34f716p1b8904jsn20779150cc15",
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
  console.log(trackLists);
  return (
    <div className="billboard-rows h-full select-none w-full overflow-x-visible md:overflow-hidden">
      <h2 className="font-bold text-md sm:text-lg text-left mb-2">Albums</h2>
      <ul className="flex justify-center sm:justify-start overflow-y-hidden overflow-x-scroll w-full whitespace-nowrap h-2/6 rows">
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
      {trackLists ? (
        <div className="headings grid grid-cols-4 h-14 mt-2">
          <div className="heading col-span-2 mb-2 flex text-left flex-col">
            <h2 className="font-bold text-md sm:text-lg">Tracks</h2>
            <span className="text-gray-400 text-xs">
              {playLists.length} songs
            </span>
          </div>
          <div className="sm:ml-24 ml-0 heading col-span-2 mb-2 flex text-right sm:text-left flex-col">
            <h2 className="font-bold text-md sm:text-lg">Track Playing</h2>
            <span className="text-gray-400 text-xs">
              {playLists.length} songs
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex-col md:flex-row flex w-full h-1/2">
        <div className="album-tracks mr-4 flex-col flex h-56 w-full sm:w-full md:h-full md:w-3/5 overflow-y-scroll">
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
        <div className="player-board w-full sm:w-full md:w-2/5 flex flex-col items-center justify-center h-full">
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
