import React from "react";

export default function FavoriteBooks({ books, handleFavClick }) {
  const favoriteBooks = books.filter((book) => book.isFavorite);

  return (
    <section className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10">
          <div className="card-collection">
            <div className="row justify-content-center">
              {favoriteBooks.map((book) => (
                <div key={book.id} className="card m-2">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title: {book.bookName}</h5>
                    <div className="card-text">
                      <span className="subtitle">
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
                          </div>
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
    </section>
  );
}
