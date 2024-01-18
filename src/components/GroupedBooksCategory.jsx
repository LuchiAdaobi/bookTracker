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
