import React, { useReducer, useContext } from "react";

export const SpotifyDataContext = React.createContext();

export function SpotifyProvider({ initialState, reducer, children }) {
  return (
    <SpotifyDataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SpotifyDataContext.Provider>
  );
}

export const useSpotifyData = () => useContext(SpotifyDataContext);
