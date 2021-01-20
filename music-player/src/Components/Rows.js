import React from "react";
import { useSpotifyData } from "./SpotifyProvider";
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
        className=" md:h-44 lg:w-40 xl:w-42 xl:h-42 lg:h-40 md:w-44  2xl:w-64 2xl:h-64 2xl:mr-8 rounded-lg mr-5 row-start-1 w-48 h-48 shadow-xl cursor-pointer object-cover"
        src={image}
        alt={title}
      />
    </>
  );
}

export default Rows;
