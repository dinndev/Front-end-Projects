export const authEndpoint = "https://accounts.spotify.com/authorize";
require("dotenv").config();
const redirectUri = "https://dinndev.github.io/Front-end-Projects/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read",
];

export const getTokenfromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((init, item) => {
      let parts = item.split("=");
      init[parts[0]] = decodeURIComponent(parts[1]);
      return init;
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${
  process.env.REACT_APP_CLIENT_ID
}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
