// App.js
import { useState, useEffect } from "react";
import data from "./data";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import Books from "./components/BooksContent";
import Footer from "./components/Footer";
import GroupedBooksCategory from "./components/GroupedBooksCategory";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteBooks from "./components/FavoriteBooks";

function App() {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("booksList")) || data
  );
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    JSON.parse(localStorage.getItem("selectedBookCategory")) ||
      "CurrentlyReading"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [groupedBooks, setGroupedBooks] = useState([]);
  const [collapsedCategories, setCollapsedCategories] = useState([]);

  useEffect(() => {
    localStorage.setItem("booksList", JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem(
      "selectedBookCategory",
      JSON.stringify(selectedBookCategory)
    );
    setGroupedBooks(calculateGroupedBooks(books, selectedBookCategory));
  }, [selectedBookCategory, books]);

 const calculateGroupedBooks = (books, selectedBookCategory) => {
   const booksCategory = ["Read", "Reread", "CurrentlyReading", "Finished"];

   return booksCategory.map((book) => {
     const bookGroup = books.filter((bk) => bk.category === book);
     return {
       category: book, // Add the category property
       group: bookGroup,
       collapsed: selectedBookCategory === book ? false : true,
     };
   });
 };

  const updateCollapsedCategories = (updatedCollapsedCategories) => {
    setCollapsedCategories(updatedCollapsedCategories);
  };

  const handleBookSelection = (e) => {
    setSelectedBookCategory(e.target.value);
  };

  const handleBookCardClick = (e) => {
    const transformedBooks = books.map((book) =>
      book.id === parseInt(e.currentTarget.id)
        ? book.category === selectedBookCategory
          ? { ...book, category: "" }
          : { ...book, category: selectedBookCategory }
        : book
    );

    setBooks(transformedBooks);
  };

  const handleFavClick = (bookId, e) => {
    e.stopPropagation();
    console.log("handleFavClick called with bookId:", bookId);
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
      );
      console.log(updatedBooks);
      return [...updatedBooks];
    });
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Header
          selectedBookCategory={selectedBookCategory}
          bookCategoryCount={
            books.filter((book) => book.category === selectedBookCategory)
              .length
          }
          favBookCategoryCount={books.filter((book) => book.isFavorite).length}
          collapsedCategories={collapsedCategories}
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
                handleSearchInput={handleSearchInput}
                searchQuery={searchQuery}
              />
            }
          ></Route>
          <Route
            path="/GroupedBooksCategory"
            element={
              <GroupedBooksCategory
                books={books}
                selectedBookCategory={selectedBookCategory}
                updateCollapsedCategories={updateCollapsedCategories}
                collapsedCategories={collapsedCategories}
              />
            }
          ></Route>
          <Route
            path="/FavoriteBooks"
            element={
              <FavoriteBooks books={books} handleFavClick={handleFavClick} />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
