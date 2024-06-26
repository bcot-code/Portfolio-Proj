import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the required icons to the library
library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
  faEnvelope
);
import Resume from "../../resume/Resume_pdf.pdf";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.shecodes.io/graduates/13404-barbara-cortinas"
                >
                  Certificates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content-container container">
        <div className="row">
          <div className="about-section-content app">
            <div className="col-md-7 col-xs-4">
              <h1 className="mb-6">About me</h1>

              <h2 className="mb-9 col-xs-5">
                Front-End Developer from McAllen, TX
              </h2>
              <br />
              <div className="text-center">
                <p className="col-xs-2">
                  I worked hard as a business administrator in a family business
                  for three years and as a personal assistant for five years. I
                  felt I needed to discover more of myself after going through
                  many medical career challenges. I realized I wanted to become
                  a programmer, despite the hardships and issues of the web
                  language. The career challenges that came with it were like
                  solving a puzzle or making art, but more less helping clients.
                  <br />
                  <br />
                  As a first time self-pace Full Stack Developer who worked on
                  the side with a few projects and learning to code through many
                  bootcamps (Freemote, Codeacademy, Youtube, and Shecodes) to
                  becoming an Software Developer / a Freelancer all at my own
                  pace. Just making my way through great bootcamp called UT Full
                  Stack bootcamp and grasping all of their projects all at once
                  which helped me grow more into the Developer I am today.
                  <br />
                  <br />
                  Im a hard worker, fast learner, and strategic planner so that
                  way I can deliver high quality of solutions. Its always a
                  great opportunity to work with others with the same passion of
                  making the web , you know fun and educational for the next
                  generation of programmers. Currently, seeking more
                  opportunities at any chance given as a self-taught Developer.
                  Open to working remotely and with flexible hours. Highly
                  flexible in JS and React(the web is built-in responsive mobile
                  view as well).
                </p>
                <br />
                <h4>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <em> contact me below </em>
                </h4>
                <div className="resume-link">
                  <div className="link">
                    <a href={Resume} target="blank">
                      Resume
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="emoji text-center" id="emoji">
                <img
                  src="./images/self.png"
                  alt="self"
                  className="rounded mx-auto d-block"
                />
              </div>

              <div className="social_links bottom-5">
                <div className="jss1 ">
                  <div className="wrapper">
                    <a href="#" className="icon facebook">
                      <div className="tooltip">Facebook</div>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="icon twitter">
                      <div className="tooltip">Twitter</div>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" className="icon instagram">
                      <div className="tooltip">Instagram</div>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://github.com/bcot-code"
                      className="icon github"
                    >
                      <div className="tooltip">Github</div>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#" className="icon youtube">
                      <div className="tooltip">Youtube</div>
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/barbara-c-874a46214/"
                      className="icon mail"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
