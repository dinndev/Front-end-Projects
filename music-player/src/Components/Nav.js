import React from "react";
import { NavLink } from "react-router-dom";
import { lists } from "./NavItems";
import "./CostumStyle/musicPlayer.css";

function Nav() {
  return (
    <div className="nav hidden lg:block w-1/4 lg:max-w-7xl bottom-0 text-sm bg-white">
      <div className=" p-6 profile flex flex-col items-center">
        <img
          className="rounded-full lg:w-14 lg:h-14 w-20 shadow-xl mb-2 h-20 object-cover"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="user"
        />
        <h2 className="profile-name font-bold text-md mt-2 font-lato leading-6">
          Login
        </h2>
        <span className="tracking-wide profile-email text-gray-400 text-xs"></span>
      </div>
      <ul className="flex flex-col items-center h-40 justify-around my-4 nav-list w-full ">
        {lists.map((items, index) => {
          return (
            <NavLink
              exact
              activeClassName="nav-active"
              to={items.url}
              key={index}
              className="flex w-3/5 font-lato font-bold text-secondary items-center hover:text-blue-600 text-sm "
            >
              <span className="mr-4">{items.svg}</span>
              <h2>{items.title}</h2>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
