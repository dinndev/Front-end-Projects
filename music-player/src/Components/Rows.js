import React, { useEffect } from "react";
import { useSpotifyData } from "./SpotifyProvider";
function Rows({ albums }) {
  const [{ trackLists, playing }, dispatch] = useSpotifyData();
  const { images, name, artists, tracks } = albums;
  return (
    <>
      <img
        onClick={() => {
          dispatch({ type: "SET_TRACKS", trackLists: tracks.items });
          dispatch({ type: "SET_IMAGES", imageUrl: images });
        }}
        className="first:w-48 first:h-48 rounded-lg mr-2 row-start-1 w-44 h-44 shadow-xl cursor-pointer object-cover"
        src={images[0].url}
        alt={name}
      />
      {/* <div className="title row-start-2 text-left flex flex-col h-20">
        <h3 className="text-sm leading-7 text-secondary">{name}</h3>
        <p className="text-xs text-gray-400">
          {artists.map((test) => test.name)}
        </p>
      </div> */}
    </>
  );
}

export default Rows;
