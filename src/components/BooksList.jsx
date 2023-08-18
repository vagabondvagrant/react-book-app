import React, { useEffect, useState } from "react";
import axios from "axios";
import { FetchUrl } from "./FetchUrl";
import { useAppContext } from "./useContext";
import { useNavigate } from "react-router-dom";

export const BooksList = () => {
  const [fetchBooks, setFetchBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await axios.get(FetchUrl);
        setFetchBooks(apiResponse.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {fetchBooks.map((book) => (
        <div
          key={book.id}
          className="bg-white p-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <img
            src={book.image_url}
            alt={book.title}
            onClick={() => navigate(`/book/${book.id}`)}
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
                className="px-4 py-2 bg-green-500 text-white rounded-md transition duration-300 hover:bg-gray-600"
              >
                Add to favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
