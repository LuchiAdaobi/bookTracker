export default function Header({ selectedBookCategory, bookCategoryCount }) {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Book Tracker</h1>
          <h6>
            There {bookCategoryCount > 1 ? "are" : "is"} {bookCategoryCount}{" "}
            {bookCategoryCount > 1 ? "books" : "book"} in the{" "}
            <span style={{ color: "green" }}>{selectedBookCategory}</span>{" "}
            category
          </h6>
        </div>
      </div>
    </header>
  );
}
