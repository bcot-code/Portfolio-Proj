import React, { useState } from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Portfolio from "./components/portfolio";

// Add icons to library
library.add(faFacebookF, faTwitter, faInstagram, faGithub, faLinkedin);

function App() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <AboutPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="app">
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("About");
              }}
              className={`nav-link ${currentPage === "About" ? "active" : ""}`}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("Portfolio");
              }}
              className={`nav-link ${currentPage === "Portfolio" ? "active" : ""}`}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("Contact");
              }}
              className={`nav-link ${currentPage === "Contact" ? "active" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main>{renderPage()}</main>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="content-container">
      <h1 className="section-title">About Me</h1>
      <div className="about-section-content">
        <div className="text-center">
          <p>
            I worked hard as a business administrator in a family business for
            three years and as a personal assistant for five years. I felt I
            needed to discover more of myself after going through many medical
            career challenges. I realized I wanted to become a programmer,
            despite the hardships and issues of the web language. The career
            challenges that came with it were like solving a puzzle or making
            art, but more less helping clients.
            <br />
            <br />
            As a first time self-pace Full Stack Developer who worked on the
            side with a few projects and learning to code through many bootcamps
            (Freemote, Codeacademy, Youtube, and Shecodes) to becoming an
            Software Developer / a Freelancer all at my own pace. Just making
            my way through great bootcamp called UT Full Stack bootcamp and
            grasping all of their projects all at once which helped me grow
            more into the Developer I am today.
            <br />
            <br />
            I'm a hard worker, fast learner, and strategic planner so that way
            I can deliver high quality of solutions. It's always a great
            opportunity to work with others with the same passion of making the
            web fun and educational for the next generation of programmers.
            Currently, seeking more opportunities at any chance given as a
            self-taught Developer. Open to working remotely and with flexible
            hours. Highly flexible in JS and React.
          </p>
          <br />
          <div className="resume-link">
            <a href="/src/resume/Resume_pdf.pdf" target="blank">
              <FontAwesomeIcon icon={faGithub} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Leave a DM with me</h1>
      <div className="contact-form-row">
        <div className="col-md-8">
          <form
            action="https://formspree.io/f/mwkalajy"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label className="form-label">Your email:</label>
              <input
                type="email"
                name="_replyto"
                className="form-input"
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your message:</label>
              <textarea
                name="message"
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send
            </button>
          </form>
        </div>
        <div className="contact-buttons">
          <a href="mailto:bcort49@gmail.com" className="contact-link">
            <button className="btn-contact">Email</button>
          </a>
          <a
            href="https://www.linkedin.com/in/barbara-c-874a46214"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <button className="btn-contact">LinkedIn</button>
          </a>
        </div>
      </div>
      <footer className="contact-footer">
        <div className="contact_box">
          <h4>Let's work together</h4>
        </div>
        <br />
        <div>
          <a
            href="https://github.com/bcot-code"
            target="_blank"
            className="github_link"
            rel="noreferrer"
          >
            ~Tap to Github~
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

