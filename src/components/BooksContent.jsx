export default function Books({
  books,
  handleBookSelection,
  selectedBookCategory,
  handleBookCardClick,
  handleFavClick,
  handleSearchInput,
  searchQuery
  //   isFav
}) {
  const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6 ">
          <div className="d-flex align-items-center ">
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

            <div className="input-group ms-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search books..."
                value={searchQuery}
                onChange={handleSearchInput}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                style={{ border: "1px solid #bf7e99" }}
              >
                <i className="fa fa-search" style={{ color: "#bf5e85" }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10">
          <div className="card-collection">
            {filteredBooks.map((book) => (
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
    </main>
  );
}
