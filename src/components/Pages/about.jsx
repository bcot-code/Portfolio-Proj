import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../../../resume/Resume_pdf.pdf";

// Add icons to library
library.add(faFacebookF, faTwitter, faInstagram, faGithub, faYoutube, faEnvelope, faDownload);

export default function About() {
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
            I&apos;m a hard worker, fast learner, and strategic planner so that
            way I can deliver high quality of solutions. It&apos;s always a
            great opportunity to work with others with the same passion of
            making the web fun and educational for the next generation of
            programmers. Currently, seeking more opportunities at any chance
            given as a self-taught Developer. Open to working remotely and with
            flexible hours. Highly flexible in JS and React.
          </p>
          <br />
          <h4>
            <FontAwesomeIcon icon={faEnvelope} />
            <em> contact me below </em>
          </h4>
          <div className="resume-link">
            <a href={Resume} target="blank">
              Resume
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>

        <div className="emoji text-center">
          <img
            src="./images/self.png"
            alt="self"
            className="rounded mx-auto block"
          />
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="wrapper"
          >
            <span className="tooltip">Facebook</span>
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="wrapper"
          >
            <span className="tooltip">Twitter</span>
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="wrapper"
          >
            <span className="tooltip">Instagram</span>
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a
            href="https://github.com/bcot-code"
            target="_blank"
            rel="noopener noreferrer"
            className="wrapper"
          >
            <span className="tooltip">GitHub</span>
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="wrapper"
          >
            <span className="tooltip">YouTube</span>
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/barbara-c-874a46214"
            target="_blank"
            rel="noopener noreferrer"
            className="wrapper"
          >
            <span className="tooltip">LinkedIn</span>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

