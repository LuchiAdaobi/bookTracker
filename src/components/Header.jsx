import { useNavigate } from "react-router-dom";

export default function Header({ selectedBookCategory, bookCategoryCount, favBookCategoryCount }) {
  const navigate = useNavigate();
  const isFavoritePage = window.location.pathname === "/FavoriteBooks";
  const groupedBooksCategory = window.location.pathname === "/GroupedBooksCategory";

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Book Tracker</h1>
          {isFavoritePage ? (
            <h6>
              You have {favBookCategoryCount}{" "}
              {favBookCategoryCount > 1 ? "favorites" : "favorite"}{" "}
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
