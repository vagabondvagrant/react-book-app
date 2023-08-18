import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book_Details } from "./FetchUrl";

export const BooksDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const neatFetch = await axios.get(`${Book_Details}/${id}`);
        setBook(neatFetch.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{book?.title}</h2>
          <div>
            <img
              src={book?.image_url}
              alt="Image not available"
              className="max-w-full h-auto mb-4"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">Author: {book?.authors}</h3>
          <div className="text-gray-700 mb-4">{book?.description}</div>
          Back to Details
        </div>
      </div>
    </div>
  );
};
