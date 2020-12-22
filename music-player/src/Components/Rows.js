import React, { useEffect } from "react";
import { useSpotifyData } from "./SpotifyProvider";
import axios from "axios";
import TrackLists from "./TrackLists";
function Rows({ image, title, tracks }) {
  const [{ trackLists, playing, input }, dispatch] = useSpotifyData();
  return (
    <>
      <img
        onClick={() =>
          dispatch({
            type: "SET_INPUT",
            input: title,
          })
        }
        className="first:w-48 first:h-48 rounded-lg mr-2 row-start-1 w-44 h-44 shadow-xl cursor-pointer object-cover"
        src={image}
        alt={title}
      />
    </>
  );
}

export default Rows;
