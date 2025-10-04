// import React from "react";
import Projects from "./Pages/projects";
import self from "../assets/Images/self-pic.jpeg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const projects = [
  {
    id: 0,
    name: "AI Mocked Inteview(CLONE)",
    description:
      "user can practice technical interview questions with an AI Interviewer, saving time and effort in preparing for real interviews. It'll provide saving the interviews. Best Practice for React Vite",
    img: "/images/AI-Mock-Interview.png",
    techUsed: "JS, React Vite, Node, Firebase and Vapi AI",
    liveUrl: "https://ai-mock-interview-u54u.vercel.app/sign-in",
  },
  {
    id: 1,
    name: "Zibooka(MERN Stack CLONE)",
    description:
      "Implement a full-stack web application that allows users to browse, search, and purchase books online. Best Practice for MERN Stack",
    img: "/images/zibooka.png",
    techUsed: "MERN Stack Book Store App Using React, MongoDB, Express, Node and Stripe for payment",
    liveUrl: "zibooka-neon.vercel.app",
  },
  {
    id: 2,
    name: "Movie Search_movie",
    description:
      "Create a movie search engine that allows users to search for movies and view details about them using the React and JS.Plus sort by old to new",
    img: "/images/Search_movie.png",
    techUsed: "JS, Node, VITE-REACT",
    liveUrl: "https://bcot-code.github.io/js-final-proj/",
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
        <aside className="center">
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
