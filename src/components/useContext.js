import React, { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Error occurred in useContext");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const newFavorites = favorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
