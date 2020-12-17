"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUrl = exports.getTokenfromRes = exports.authEndpoint = void 0;
var authEndpoint = "https://accounts.spotify.com/authorize";
exports.authEndpoint = authEndpoint;
var redirectUri = "http://localhost:3000/";
var clientId = "d90419c92a394294aa09182c83bd03ab";
var scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];

var getTokenfromRes = function getTokenfromRes() {
  return window.location.hash.substring(1).split("&").reduce(function (init, item) {
    var parts = item.split("=");
    init[parts[0]] = decodeURIComponent(parts[1]);
    return init;
  }, {});
};

exports.getTokenfromRes = getTokenfromRes;
var loginUrl = "".concat(authEndpoint, "?client_id=").concat(clientId, "&redirect_uri=").concat(redirectUri, "&scope=").concat(scopes.join("%20"), "&response_type=token&show_dialog=true");
exports.loginUrl = loginUrl;