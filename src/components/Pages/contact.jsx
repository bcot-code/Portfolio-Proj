export default function Contact() {
  return (
    <div>
      <nav className="nav navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          More ME?
        </a>
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
            <li className="nav-item">
              <a className="nav-link" href="contact.html#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="work.html#workshop">
                Workshop
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <h1 className="mb-5">Leave a Dm with me</h1>
        <div className="row">
          <div className="col-md-8">
            <form
              action="https://formspree.io/f/mwkalajy"
              method="POST"
              className="border p-3 rounded mb-3"
            >
              <div className="mb-3">
                <label className="form-label"> Your email: </label>
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  required=""
                  autoFocus=""
                />
              </div>
              <div className="mb-3">
                <label className="form-label"> Your message: </label>
                <textarea
                  name="message"
                  className="form-control"
                  required=""
                ></textarea>
              </div>

              <button type="submit" className="btn btn-branding">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Email</h3>
            <p className="offset-md-6">
              <a href="mailto:bcort49@gmail.com">bcort49@gmail.com</a>
            </p>
            <h3>IG</h3>
            <p className="offset-md-6">
              <a href="#">@bccode</a>
            </p>
            <h3>Contact me</h3>
            <p className="offset-md-6">
              <a href="https://github.com/bcot-code" className="email-link">
                https://github.com/bcot-code
              </a>
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="contact_box justify-content-center mb-5 d-none d-lg-flex">
          <div>
            <h4>Lets work together</h4>
            <p>Works</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <a
            href="mailto:bcort49@gmail.com"
            target="_blank"
            className="email_link"
            rel="noreferrer"
          >
            ~Bcort49~
          </a>
        </div>
        <div className="social_links d-flex justify-content-center">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
