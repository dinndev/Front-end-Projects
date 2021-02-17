import { artists, randomSearch } from "./helperFuctions";

export const initialState = {
  playLists: {},
  trackPlaying: {},
  playing: false,
  imageUrl: "",
  trackLists: [],
  input: randomSearch(artists),
  likedTracks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playLists: action.playLists,
      };
    case "SET_TRACKS":
      return {
        ...state,
        trackLists: action.trackLists,
      };
    case "SET_IMAGES":
      return {
        ...state,
        imageUrl: action.imageUrl,
      };
    case "SET_TRACK_PLAYING":
      return {
        ...state,
        trackPlaying: action.trackPlaying,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_INPUT":
      return {
        ...state,
        input: action.input,
      };
    case "SET_LIKED_TRACKS":
      return {
        ...state,
        likedTracks: [...state.likedTracks, action.likedTracks],
      };
    default:
      return state;
  }
};

export default reducer;
