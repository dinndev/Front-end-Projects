import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "./CostumStyle/musicPlayer.css";
import { lists } from "./NavItems";
function Header() {
  const [toggle, toggleNav] = useState(false);
  const handleToggle = () => {
    toggleNav(!toggle);
  };

  return (
    <div className="header w-full h-14 my-3 flex items-center justify-between">
      {toggle ? null : <SearchBar />}
      <div className="nav-controls hidden lg:flex pl-4 md:pl-0 items-center  bg-red w-2/6 sm:w-1/6 md:w-1/3 justify-end">
        <button className="hidden text-xs lg:block items-center h-10 bg-red-400 px-4 text-white rounded-full">
          Upgrade Plan
        </button>
      </div>
      <div
        className={` flex items-center ${
          toggle ? "justify-between w-full" : "justify-end w-auto"
        }`}
      >
        <svg
          onClick={handleToggle}
          className={`w-7 h-7 transition-transform transform ${
            toggle ? "rotate-180" : ""
          }`}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z" />
          <path d="M0-.5h48v48H0z" fill="none" />
        </svg>
        <ul
          className={`overlayNav w-5/6 overflow-x-scroll flex justify-end transition-all items-center ${
            toggle ? "flex" : "hidden"
          }`}
        >
          {lists.map((items, index) => {
            return (
              <NavLink
                exact
                activeClassName="nav-active"
                to={items.url}
                key={index}
                className="text-xs flex w-1/4 justify-center font-lato font-bold text-secondary items-center hover:text-blue-600"
              >
                <h2>{items.title}</h2>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
