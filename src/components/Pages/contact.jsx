export default function Contact() {
  return (
    <div>
      <div className="content">
        <h1 className="mb-5">Leave a DM with me</h1>
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
          <div className="d-grid gap-1">
            <a href="mailto:bcort49@gmail.com">
              <button className="btn btn-primary">Email</button>
            </a>
          </div>
          <div className="d-grid gap-2 btn-primary">
            <a
              href="https://www.linkedin.com/in/barbara-c-874a46214"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn btn-secondary"
                onClick="window.location.href='https://www.linkedin.com/in/barbara-c-874a46214'"
              >
                Linkedin
              </button>
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="contact_box justify-content-center mb-5 d-none d-lg-flex">
          <div>
            <h4>Lets work together</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
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
