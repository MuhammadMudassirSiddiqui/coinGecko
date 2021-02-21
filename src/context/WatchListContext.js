import React, { createContext, useContext, useState } from "react";

const watchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([
    "bitcoin",
    "ethereum",
    "tether",
    "ripple",
  ]);
  const DeleteCoin = (id) => {
    setWatchList(watchList.filter((coin) => coin !== id));
  };
  return (
    <watchListContext.Provider value={{ watchList, DeleteCoin }}>
      {children}
    </watchListContext.Provider>
  );
};

export const GlobalContext = () => useContext(watchListContext);
