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
        className=" md:h-44 lg:w-40 lg:h-40 md:w-44 2xl:h-80 2xl:w-96 2xl:mr-8 rounded-lg mr-5 row-start-1 w-48 h-48 shadow-xl cursor-pointer object-cover"
        src={image}
        alt={title}
      />
    </>
  );
}

export default Rows;