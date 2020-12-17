import React, { useEffect } from "react";
import { useSpotifyData } from "./SpotifyProvider";
import Rows from "./Rows";
import SpotifyWebApi from "spotify-web-api-js";
import "./CostumStyle/musicPlayer.css";
import TrackLists from "./TrackLists";
import TrackPlaying from "./TrackPlaying";
import { ms, m, s } from "time-convert";
require("dotenv").config();
const spotify = new SpotifyWebApi();
function MusicPlayer() {
  const [
    { playLists, trackLists, imageUrl, trackPlaying, token },
    dispatch,
  ] = useSpotifyData();
  useEffect(() => {
    // api call
    if (token) {
      spotify.setAccessToken(token);
      spotify.getMySavedAlbums({ limit: 10 }).then((albums) => {
        const data = {
          images: albums.items[0].album.images,
          tracks: albums.items[0].album.tracks.items,
          singleTrack: albums.items[0].album.tracks.items[0],
        };
        const time = ms.to(m, s)(data.singleTrack.duration_ms);
        const _duration = `${time[0]}:${time[1]}`;
        const singleTrackData = [
          {
            trackName: data.singleTrack.name,
            images: data.images,
            artist: data.singleTrack.artists,
            duration: _duration,
          },
        ];

        dispatch({
          type: "SET_TRACKS",
          trackLists: data,
        });
        dispatch({
          type: "SET_TRACK_PLAYING",
          trackPlaying: singleTrackData,
        });
        dispatch({
          type: "SET_PLAYLIST",
          playLists: albums.items,
        });
      });
      spotify.getMe().then((user) =>
        dispatch({
          type: "SET_USER",
          user,
        })
      );
    }
  }, [dispatch]);
  console.log(process.env.REACT_APP_CLIENT_ID);

  return (
    <div className="billboard-rows h-full select-none w-full overflow-x-visible md:overflow-hidden">
      <h2 className="font-bold text-md sm:text-lg text-left mb-2">Albums</h2>
      <ul className="flex overflow-y-hidden overflow-x-scroll w-full whitespace-nowrap h-2/6 rows">
        {playLists.map(({ album }) => {
          return <Rows key={album.id} albums={album} />;
        })}
      </ul>
      {trackLists ? (
        <div className="headings grid grid-cols-4 h-14 mt-2">
          <div className="heading col-span-2 mb-2 flex text-left flex-col">
            <h2 className="font-bold text-md sm:text-lg">Tracks</h2>
            <span className="text-gray-400 text-xs">
              {trackLists.length} songs
            </span>
          </div>
          <div className="sm:ml-24 ml-0 heading col-span-2 mb-2 flex text-right sm:text-left flex-col">
            <h2 className="font-bold text-md sm:text-lg">Track Playing</h2>
            <span className="text-gray-400 text-xs">
              {trackLists.length} songs
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex-col md:flex-row flex w-full h-1/2">
        <div className="album-tracks mr-4 flex-col flex h-56 w-full sm:w-full md:h-full md:w-3/5 overflow-y-scroll">
          {trackLists.tracks
            ? Array.from(trackLists.tracks).map(
                ({ duration_ms, artists, name, id }, index) => {
                  return (
                    <TrackLists
                      key={id}
                      duration={duration_ms}
                      trackName={name}
                      artist={artists.map((artist) => artist.name)}
                      length={index + 1}
                      images={trackLists.images}
                    />
                  );
                }
              )
            : trackLists.map(({ id, name, artists, duration_ms }, index) => {
                return (
                  <TrackLists
                    key={id}
                    duration={duration_ms}
                    trackName={name}
                    id={id}
                    images={imageUrl}
                    length={index + 1}
                    artist={artists.map((artist) => artist.name)}
                  />
                );
              })}
        </div>
        <div className="player-board w-full sm:w-full md:w-2/5 flex flex-col items-center justify-center h-full">
          {Array.from(trackPlaying).map(
            ({ images, artist, id, trackName, duration }) => {
              return (
                <TrackPlaying
                  images={images}
                  key={id}
                  artist={artist}
                  id={id}
                  trackName={trackName}
                  duration={duration}
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
