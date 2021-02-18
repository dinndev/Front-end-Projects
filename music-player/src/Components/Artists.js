import React from "react";
import { useSpotifyData } from "./SpotifyProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  distincValFilter,
  initial,
  exit,
  animate,
  transition,
  trackFilter,
} from "./helperFuctions";
import { Link } from "react-router-dom";

function Artists() {
  const [{ trackLists }, dispatch] = useSpotifyData();
  const key = "name";
  const arrayUniqueByKey = [
    ...new Map(
      trackFilter(trackLists).map((item) => [item.artist[key], item])
    ).values(),
  ];
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
        Artists
      </motion.h1>
      {arrayUniqueByKey.length == 0 ? (
        <motion.h2
          key="AnimteH2"
          initial={initial}
          transition={{ duration: transition.tracks }}
          animate={animate}
          exit={exit}
          className="font-bold text-secondary h-10 text-md sm:text-lg text-left"
        >
          Search and discover artists.
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
            {arrayUniqueByKey.map(({ artist }) => {
              const { id, name, picture_medium } = artist;
              return (
                <Link
                  key={id}
                  className="flex flex-col m-3 justify-center items-center"
                  to="/"
                >
                  <img
                    onClick={() =>
                      dispatch({
                        type: "SET_INPUT",
                        input: name,
                      })
                    }
                    className="md:h-44 lg:w-40 xl:w-36 row xl:h-42 lg:h-36 md:w-44 2xl:w-64 2xl:h-64 rounded-full row-start-1 w-48 h-48 cursor-pointer object-cover"
                    src={picture_medium}
                    alt={name}
                  />
                  <span className="my-4 text-xs text-secondary  text-center font-lato font-medium">
                    {name}
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

export default Artists;
