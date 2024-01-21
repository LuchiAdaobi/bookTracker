// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Header({
  selectedBookCategory,
  // books,
  favBookCategoryCount,
  collapsedCategories,
}) {
  const navigate = useNavigate();
  const isFavoritePage = window.location.pathname === "/FavoriteBooks";
  const isGroupedBooksCategoryPage =
    window.location.pathname === "/GroupedBooksCategory";

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Book Tracker</h1>
          <Routes>
            <Route
              path="/"
              element={
                <h6>
                  There{" "}
                  {collapsedCategories.find(
                    (category) => category.category === selectedBookCategory
                  )?.group.length !== 1
                    ? "are"
                    : "is"}{" "}
                  {
                    collapsedCategories.find(
                      (category) => category.category === selectedBookCategory
                    )?.group.length
                  }{" "}
                  {collapsedCategories.find(
                    (category) => category.category === selectedBookCategory
                  )?.group.length !== 1
                    ? "books"
                    : "book"}{" "}
                  in the{" "}
                  <span style={{ color: "#bf3e85" }}>
                    {selectedBookCategory}
                  </span>{" "}
                  category.
                </h6>
              }
            ></Route>
            <Route
              path="/FavoriteBooks"
              element={
                <h6>
                  You have {favBookCategoryCount}{" "}
                  <span style={{ color: "#bf3e85" }}>
                    {" "}
                    {favBookCategoryCount > 1 ? "Favorites" : "Favorite"}{" "}
                  </span>{" "}
                  {favBookCategoryCount > 1 ? "books" : "book"}.
                </h6>
              }
            ></Route>

            <Route
              path="/GroupedBooksCategory"
              element={collapsedCategories
                .filter((collapsedCategory) => !collapsedCategory.collapsed)
                .map((collapsedCategory, index) => (
                  <h6 key={index}>
                    There {collapsedCategory.group.length > 1 ? "are" : "is"}{" "}
                    {collapsedCategory.group.length}{" "}
                    {collapsedCategory.group.length > 1 ? "books" : "book"} in
                    the{" "}
                    <span style={{ color: "#bf3e85" }}>
                      {collapsedCategory.category}
                    </span>{" "}
                    category.
                  </h6>
                ))}
            ></Route>
          </Routes>
        </div>
      </div>
    </header>
  );
}
