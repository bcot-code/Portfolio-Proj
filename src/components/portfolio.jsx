import Projects from "./Pages/projects";
import self from "../assets/Images/self-pic.jpeg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    id: 0,
    name: "AI Mocked Interview (CLONE)",
    description:
      "User can practice technical interview questions with an AI Interviewer, saving time and effort in preparing for real interviews. It'll provide saving the interviews. Best Practice for React Vite.",
    img: "/images/AI-Mock-Interview.png",
    techUsed: "JS, React Vite, Node, Firebase, Vapi AI",
    liveUrl: "https://ai-mock-interview-u54u.vercel.app/sign-in",
  },
  {
    id: 1,
    name: "Zibooka (MERN Stack CLONE)",
    description:
      "A full-stack web app for browsing, searching, and purchasing books online. Best Practice for MERN Stack.",
    img: "/images/zibooka.png",
    techUsed: "MERN Stack, MongoDB, Express, Node, Stripe",
    liveUrl: "https://zibooka-neon.vercel.app",
  },
  {
    id: 2,
    name: "Movie Search",
    description:
      "Movie search engine that lets users find movies and view details using React and JS, sorted by release year.",
    img: "/images/Search_movie.png",
    techUsed: "JS, Node, Vite-React",
    liveUrl: "https://bcot-code.github.io/js-final-proj/",
  },
  {
    id: 3,
    name: "React Dictionary App",
    description:
      "Dictionary app using React and an API for searching word definitions.",
    img: "/images/dictionary.png",
    techUsed: "React, HTML, CSS",
    liveUrl: "https://brilliant-rabanadas-1beb76.netlify.app",
  },
];

export default function Portfolio() {
  return (
    <div className="page-section">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={self}
          alt="Barbara C."
          className="hero-image"
        />
        <h2 className="hero-title">Front-End Developer</h2>
        <p className="hero-subtitle">
          Hi! I&apos;m Barbara (Barbie), welcome to my portfolio! Please take a look
          around &mdash; below you&apos;ll find some of my work. Feel free to reach out if
          you&apos;d like to connect!
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a
            href="https://github.com/bcot-code"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Github
          </a>
        </div>
      </section>
      
      <hr style={{ margin: "3rem auto", maxWidth: "600px", opacity: 0.3 }} />
      
      {/* Projects Section */}
      <h2 className="section-title">My Projects</h2>
      <Projects projects={projects} />

      {/* Footer */}
      <footer className="contact-footer">
        <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          More Info Below
        </h4>
        <a
          href="https://github.com/bcot-code"
          target="_blank"
          rel="noopener noreferrer"
          className="github_link"
        >
          <FontAwesomeIcon icon={faGithub} /> Visit My GitHub
        </a>
      </footer>
    </div>
  );
}

