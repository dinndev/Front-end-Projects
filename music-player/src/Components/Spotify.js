import { useSpotifyData } from "./SpotifyProvider";
import axios from "axios";
export const deezerApiCall = (currentSong, dispatch, input, cancel) => {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: input, limit: 20 },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(async (res) => {
      const data = await res.data.data;
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
        type: "SET_TRACK_PLAYING",
        trackPlaying: singleData,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
      dispatch({
        type: "SET_LOADING",
        isLoading: false,
      });
    })
    .catch((err) => console.log(err));
};
