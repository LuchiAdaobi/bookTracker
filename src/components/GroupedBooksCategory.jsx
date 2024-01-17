import { useState } from "react";

export default function GroupedBooksCategory({ books, selectedBookCategory }) {
  const [groupedBooks, setGroupedBooks] = useState(groupedBooksDetail);

  function groupedBooksDetail() {
    const booksCategory = [
      "Read",
      "Reread",
      "CurrentlyReading",
      "Finished",
    //   "Favorite",
    ];

    return booksCategory.map((book) => {
      const bookGroup = books.filter((bk) => bk.category === book);
      return {
        book,
        group: bookGroup,
        collapsed: selectedBookCategory === book ? false : true,
      };
    });
  }

  function handleBookCategoryClick(e) {
    const transformedGroupData = groupedBooks.map((groupedData) =>
      groupedData.book === e.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );

    setGroupedBooks(transformedGroupData);
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
                  id={item.book}
                  className="card-header text-secondary bg-white"
                  onClick={handleBookCategoryClick}
                >
                  Status: {item.book}
                </h4>
                <div
                  id={"collapse_" + item.book}
                  className={item.collapsed ? "collapse" : ""}
                >
                  {item.group.map((bk, index) => (
                    <div key={index} className="mt-2 foldable">
                      <h5 className="card-title mt-2">
                        Title: {bk.bookName}
                      </h5>
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
