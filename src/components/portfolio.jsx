// import React from "react";
import Projects from "./Pages/projects";
import self from "../assets/Images/self-pic.jpeg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const projects = [
  {
    id: 0,
    name: "Weather Dashboard",
    description:
      "A weather dashboard that allows users to search for current and future conditions for any city in the world. The application utilizes API data to display information such as temperature and humidity.",
    img: "/images/WeatheraPP.png",
    techUsed: "React, Html, CSS",
    liveUrl: "https://profound-gingersnap-dec269.netlify.app",
  },
  {
    id: 1,
    name: "Digital-Day-Planner",
    description:
      "Create a simple calendar application for the day that allows a user to save events for each hour of a typical working day (9am-5pm) by modifying starter code.",
    img: "/images/Work-Schedule.png",
    techUsed: "Html, CSS, JQuery, and bootstrap",
    liveUrl: "https://bcot-code.github.io/Digital-Day-Planner/",
  },
  {
    id: 2,
    name: "Market Mingle",
    description:
      "Create Market Mingle with easier connecting local farmers and consumers in a shared celebration of fresh produce",
    img: "/images/Market-Mingle.png",
    techUsed: "JS, Node, VITE-REACT",
    liveUrl: "https://marketmingle-1.onrender.com/home",
  },
  {
    id: 3,
    name: "REACT DICTIONARY APP",
    description:
      "Generate dictionary app using react with the use of API to search for words",
    img: "/images/dictionary.png",
    techUsed: "React, HTML, CSS",
    liveUrl: "https://brilliant-rabanadas-1beb76.netlify.app",
  },
];
export default function Portfolio() {
  return (
    <div className="content is-medium">
      <h1>Portfolio</h1>
      <div className="columns is-multiline">
        <br />
        <aside>
          <img src={self} alt="Barbie C." />
        </aside>
        <div id="landing-image" className="col-md-6 order-md-2">
          <div className="row text-center col-lg-6">
            <div className="caption col-4 order-md-1 hidden-mobile">
              <h3>Front-end Developer based in America</h3>
            </div>
          </div>
          <div className="offset-md-10">
            <h1 className=" h-2 d-flex me-auto p-2 offset-md-11">
              {" "}
              Hi! Im Barbara (Barbie), Welcome to my Portfolio
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <Projects projects={projects} />
      <footer>
        <div className="contact_box d-none d-lg-flex">
          <h4>More infor Below</h4>
        </div>
        <div className="social_links d-flex justify-content-center">
          <a href="https://github.com/bcot-code">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
}
