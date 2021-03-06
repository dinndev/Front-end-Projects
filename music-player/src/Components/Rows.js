import React from "react";
import { useSpotifyData } from "./SpotifyProvider";
import { useParams } from "react-router-dom";
function Rows({ image, title, tracks, currentIndex }) {
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
        className={`md:h-44 lg:w-44 xl:w-42 row xl:h-42 lg:h-44 md:w-44 2xl:w-64 2xl:h-64 2xl:mr-8 rounded-lg mr-5 row-start-1 w-48 h-48 cursor-pointer object-cover`}
        src={image}
        alt={title}
      />
    </>
  );
}

export default Rows;
