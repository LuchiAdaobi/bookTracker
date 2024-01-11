export default function Footer() {
    let today = new Date()

    return (
      <footer className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <small>Book Tracker App - {today.getFullYear()}</small>
          </div>
        </div>
      </footer>
    );
}
