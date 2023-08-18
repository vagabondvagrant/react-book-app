import React from "react";
import { useAppContext } from "./useContext";

export const FavBooks = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-auto rounded-md"
            />
            <h3 className="mt-2 text-xl font-semibold">{book.title}</h3>
            <div className="mt-2">
              {favoritesChecker(book.id) ? (
                <button
                  onClick={() => removeFromFavorites(book.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md transition duration-300 hover:bg-red-600"
                >
                  Remove from favorites
                </button>
              ) : (
                <button
                  onClick={() => addToFavorites(book)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-600"
                >
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-xl font-semibold text-center mt-4">
          You haven't selected any favorite book yet
        </h2>
      )}
    </div>
  );
};
