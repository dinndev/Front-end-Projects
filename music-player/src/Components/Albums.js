import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpotifyData } from "./SpotifyProvider";
import { Link } from "react-router-dom";
import {
  albumFilter,
  initial,
  exit,
  animate,
  transition,
} from "./helperFuctions";
function Albums() {
  const [{ playLists, isLoading }, dispatch] = useSpotifyData();
  return (
    <AnimatePresence>
      <motion.h1
        className="font-lato my-8 text-secondary font-bold text-4xl"
        key="AnimateH1"
        initial={initial}
        transition={{ duration: transition.row }}
        animate={animate}
        exit={exit}
      >
        Albums
      </motion.h1>
      {playLists.length === undefined ? (
        <motion.h2
          key="AnimteH2"
          initial={initial}
          transition={{ duration: transition.tracks }}
          animate={animate}
          exit={exit}
          className="font-bold text-secondary h-10 text-md sm:text-lg text-left"
        >
          Search and discover albums.
        </motion.h2>
      ) : (
        <>
          <motion.ul
            key="AnimteUl"
            initial={initial}
            transition={{ duration: transition.tracks }}
            animate={animate}
            exit={exit}
            className="items-center sm:h-1/3 md:h-1/4 lg:h-1/4 2xl:w-full xl:h-1/3 2xl: flex flex-wrap justify-center lg:justify-start w-full h-2/6 rows"
          >
            {albumFilter(playLists).map(({ image, title, id }) => {
              return (
                <Link key={id} className="flex flex-col items-start" to="/">
                  <img
                    onClick={() =>
                      dispatch({
                        type: "SET_INPUT",
                        input: title,
                      })
                    }
                    className="md:h-44 lg:w-40 xl:w-42 row xl:h-42 lg:h-40 md:w-44 2xl:w-64 2xl:h-64 2xl:mr-8 rounded-lg mr-5 row-start-1 w-48 h-48 cursor-pointer object-cover"
                    src={image}
                    alt={title}
                  />
                  <span className="my-4 text-xs text-secondary w-48 text-left font-lato font-medium">
                    {title}
                  </span>
                </Link>
              );
            })}
          </motion.ul>
        </>
      )}
    </AnimatePresence>
  );
}

export default Albums;
