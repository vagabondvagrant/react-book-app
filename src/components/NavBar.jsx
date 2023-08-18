import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-300 p-4">
      <h1 className="text-2xl font-bold text-gray-800">Books App</h1>
      <Link
        to="/favorites"
        className="text-sm font-medium text-gray-500 hover:text-gray-700"
      >
        Your Favorites
      </Link>
    </div>
  );
};
