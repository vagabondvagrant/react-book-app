import { Routes, Route } from "react-router-dom";
import { BooksList } from "./components/BooksList";
import { FavBooks } from "./components/FavBooks";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { BooksDetails } from "./components/BooksDetails";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/book/:id" element={<BooksDetails />} />
        <Route path="/favorites" element={<FavBooks />} />
      </Routes>
      <Footer />
    </div>
  );
}
