function NavTabs({ currentlyPage, handlePageChange }) {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={`nav-link ${currentlyPage === "About" ? "active" : ""}`}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={`nav-link ${currentlyPage === "Portfolio" ? "active" : ""}`}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={`nav-link ${currentlyPage === "Contact" ? "active" : ""}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavTabs;
