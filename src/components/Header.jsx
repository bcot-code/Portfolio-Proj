import React from "react";
import NavTabs from "./NavTabs";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Portfolio from "./portfolio";
function Header() {
  const [currentPage, handlePageChange] = React.useState("Portfolio");
  const renderPage = () => {
    if (currentPage === "Portfolio") return <Portfolio />;
    else if (currentPage === "About") return <About />;
    else return <Contact />;
  };
  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></NavTabs>
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}
export default Header;
