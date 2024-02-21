import React from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}
export default App;
// This is the main component of our app, it holds all other components and data in a single place.
// The 'return' statement renders what will be displayed on the webpage - in this case, a heading
// ("My Portfolio") and a call to another component called "Portfolio".   When we build out more complex apps,
// ("Hey there!") and a call to the Portfolio component.
