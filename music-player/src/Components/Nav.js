import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { lists, personalMusic } from "./NavItems";
//import Spotify from '../Spotify'
import { useSpotifyData } from "./SpotifyProvider";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function Nav() {
  const [{ user }, dispatch] = useSpotifyData();
  return (
    <div className="nav hidden md:block w-1/3 bottom-0 text-sm bg-white">
      <div className=" p-6 profile flex flex-col items-center">
        <img
          className="rounded-full w-16 shadow-xl mb-2 h-16 object-cover"
          src={user ? user.images[0].url : ""}
        />
        <h2 className="profile-name text-md mt-2 leading-6">
          {user ? user.display_name : "User"}
        </h2>
        <span className="tracking-wide profile-email text-gray-400 text-xs">
          Dinndev@gmail.com
        </span>
      </div>
      <ul className="flex flex-col items-center h-48 justify-around my-4 nav-list w-full ">
        {lists.map((items, index) => {
          return (
            <Link
              to={items.url}
              key={index}
              className="flex w-3/5 items-center hover:text-blue-600 font-semibold text-sm "
            >
              <span className="mr-4">{items.svg}</span>
              <h2>{items.title}</h2>
            </Link>
          );
        })}
      </ul>
      <div className="user-songs ">
        <ul className="user-play-lists h-32 justify-around flex flex-col w-full items-center">
          <h2 className="text-sm text-gray-400 w-full mb-6 pr-12">My music</h2>
          {personalMusic.map((items, index) => {
            return (
              <Link
                to={items.url}
                key={index}
                className="flex w-full md:text-xs text-left lg:text-sm items-center fill-current hover:text-blue-600 font-semibold text-sm"
              >
                <i className="mr-4 ml-10 ">{items.svg}</i>
                <h2 className={items.title}>{items.title}</h2>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
