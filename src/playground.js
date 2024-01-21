export default function Books({
  books,
  handleBookSelection,
  selectedBookCategory,
  handleBookCardClick,
  handleFavClick,
  //   isFav
}) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            value={selectedBookCategory}
            onChange={handleBookSelection}
            className="form-select"
          >
            <option value="Read">Read</option>
            <option value="Reread">Re-read</option>
            <option value="CurrentlyReading">Currently Reading</option>
            <option value="Finished">Finished</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10">
          <div className="card-collection">
            <div className="row justify-content-center ">
              {books.map((book) => (
                <div
                  key={book.id}
                  id={book.id}
                  className={
                    book.category === selectedBookCategory
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  onClick={handleBookCardClick}
                >
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title: {book.bookName}</h5>
                    <div className="card-text">
                      <span className="subtitle">
                        {" "}
                        <small>Author: {book.author}</small>{" "}
                        <span>
                          <div
                            className="heart-container"
                            onClick={(e) => handleFavClick(book.id, e)}
                          >
                            <div
                              className={
                                book.isFavorite ? "red-heart" : "white-heart"
                              }
                            ></div>
                          </div>{" "}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


{
  isFavoritePage ? (
    <h6>
      You have {favBookCategoryCount}{" "}
      {favBookCategoryCount > 1 ? "favorites" : "favorite"}{" "}
      {favBookCategoryCount > 1 ? "books" : "book"}.
    </h6>
  ) : (
    <h6>
      There {bookCategoryCount > 1 ? "are" : "is"} {bookCategoryCount}{" "}
      {bookCategoryCount > 1 ? "books" : "book"} in the{" "}
      <span style={{ color: "#bf3e85" }}>{selectedBookCategory}</span> category
    </h6>
  );
}

// Header
// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({
  selectedBookCategory,
  bookCategoryCount,
  favBookCategoryCount,
}) {
  const navigate = useNavigate();
  const isFavoritePage = window.location.pathname === "/FavoriteBooks";
  const groupedBooksCategory =
    window.location.pathname === "/GroupedBooksCategory";

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Book Tracker</h1>
          {isFavoritePage ? (
            <h6>
              You have {favBookCategoryCount}{" "}
              {favBookCategoryCount > 1 ? (
                <span style={{ color: "#bf3e85" }}>Favorite</span>
              ) : (
                "Favorite"
              )}{" "}
              {favBookCategoryCount > 1 ? "books" : "book"}.
            </h6>
          ) : (
            <h6>
              There {bookCategoryCount > 1 ? "are" : "is"} {bookCategoryCount}{" "}
              {bookCategoryCount > 1 ? "books" : "book"} in the{" "}
              <span style={{ color: "#bf3e85" }}>{selectedBookCategory}</span>{" "}
              category
            </h6>
          )}
        </div>
      </div>
    </header>
  );
}

// GroupedBooksCategory.jsx
import React, { useState, useEffect } from "react";

export default function GroupedBooksCategory({
  books,
  selectedBookCategory,
  updateCollapsedCategories,
  collapsedCategories,
}) {
  const [groupedBooks, setGroupedBooks] = useState(groupedBooksDetail);

  function groupedBooksDetail() {
    const booksCategory = ["Read", "Reread", "CurrentlyReading", "Finished"];

    return booksCategory.map((book) => {
      const bookGroup = books.filter((bk) => bk.category === book);
      return {
        category: book, // Update property name to category
        group: bookGroup,
        collapsed: selectedBookCategory === book ? false : true,
      };
    });
  }

  function handleBookCategoryClick(e) {
    const transformedGroupData = groupedBooks.map((groupedData) =>
      groupedData.category === e.currentTarget.id // Update property name to category
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );

    setGroupedBooks(transformedGroupData);

    updateCollapsedCategories(transformedGroupData);
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="row justify-content-center ">
            {groupedBooks.map((item, index) => (
              <div
                key={index}
                className="card mt-2 group"
                style={{ cursor: "pointer" }}
              >
                <h4
                  id={item.category}
                  className="card-header text-secondary bg-white"
                  onClick={handleBookCategoryClick}
                >
                  Status: {item.category}
                </h4>
                <div
                  id={"collapse_" + item.category}
                  className={item.collapsed ? "collapse" : ""}
                >
                  {item.group.map((bk, index) => (
                    <div key={index} className="mt-2 foldable">
                      <h5 className="card-title mt-2">Title: {bk.bookName}</h5>
                      <p className="author">Author: {bk.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// header 
// Header.js
// Header.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({
  selectedBookCategory,
  bookCategoryCount,
  favBookCategoryCount,
  collapsedCategories,
}) {
  const navigate = useNavigate();
  const isFavoritePage = window.location.pathname === "/FavoriteBooks";
  const groupedBooksCategory =
    window.location.pathname === "/GroupedBooksCategory";

  const isCategoryCollapsed =
    groupedBooksCategory &&
    collapsedCategories &&
    collapsedCategories[selectedBookCategory];

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Book Tracker</h1>
          {isFavoritePage ? (
            <h6>
              You have {favBookCategoryCount}{" "}
              {favBookCategoryCount > 1 ? (
                <span style={{ color: "#bf3e85" }}>Favorite</span>
              ) : (
                "Favorite"
              )}{" "}
              {favBookCategoryCount > 1 ? "books" : "book"}.
            </h6>
          ) : (
            <h6>
              {isCategoryCollapsed ? (
                <span>
                  You have {bookCategoryCount}{" "}
                  {bookCategoryCount > 1 ? "books" : "book"} in your{" "}
                  <span style={{ color: "#bf3e85" }}>
                    {selectedBookCategory}
                  </span>{" "}
                  category
                </span>
              ) : (
                <span>
                  You have {bookCategoryCount}{" "}
                  {bookCategoryCount > 1 ? "books" : "book"} in your{" "}
                  <span style={{ color: "#bf3e85" }}>
                    {selectedBookCategory}
                  </span> category.
                </span> 
              )}
            </h6>
          )}
        </div>
      </div>
    </header>
  );
}

