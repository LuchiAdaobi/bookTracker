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
            <option value="Favorite">Favorite</option>
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
                            onClick={() => handleFavClick(book.id)}
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
