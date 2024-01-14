import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/GroupedBooksCategory">
            Category
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/FavoriteBooks">
            ❤
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
