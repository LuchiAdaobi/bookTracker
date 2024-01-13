import { useState, useEffect } from "react";
import data from "./data";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import Books from "./components/books";
import Footer from "./components/Footer";
import GroupedBookCategory from "./components/GroupedBookCategory";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("booksList")) || data
  );
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    JSON.parse(localStorage.getItem("selectedBookCategory")) || "Reread"
  );

  const [bookId, setBookId] = useState(null);

  // const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    localStorage.setItem("booksList", JSON.stringify(books));
  }, [books]);
  useEffect(() => {
    localStorage.setItem("bookCategory", JSON.stringify(selectedBookCategory));
  }, [selectedBookCategory]);

  function handleBookSelection(e) {
    setSelectedBookCategory(e.target.value);
  }

  function handleBookCardClick(e) {
    setBookId(parseInt(e.currentTarget.id));
    const transformedBooks = books.map((book) =>
      book.id === parseInt(e.currentTarget.id)
        ? book.category === selectedBookCategory
          ? { ...book, category: "" }
          : { ...book, category: selectedBookCategory }
        : book
    );

    setBooks(transformedBooks);
  }

  const handleFavClick = (bookId) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
      );
      return [...updatedBooks]; // Create a new array
    });
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Header
          selectedBookCategory={selectedBookCategory}
          bookCategoryCount={
            books.filter((book) => {
              return book.category === selectedBookCategory;
            }).length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Books
                books={books}
                handleBookSelection={handleBookSelection}
                selectedBookCategory={selectedBookCategory}
                handleBookCardClick={handleBookCardClick}
                handleFavClick={handleFavClick}
                // isFav={isFav}
              />
            }
          ></Route>
          <Route
            path="/GroupedBookCategory"
            element={<GroupedBookCategory />}
          ></Route>
          <Route
            path="*"
            element={<NotFound />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
