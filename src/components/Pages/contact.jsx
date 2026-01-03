export default function Contact() {
  return (
    <div className="contact-container">
      <div className="content">
        <h1 className="contact-title">Leave a DM with me</h1>
        <div className="row contact-form-row">
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
                  required=""
                  autoFocus=""
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your message:</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  required=""
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
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick="window.location.href='https://www.linkedin.com/in/barbara-c-874a46214'"
              >
                Linkedin
              </button>
            </a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="contact_box justify-center mb-5 hidden lg:flex">
          <div>
            <h4>Let&#39;s work together</h4>
          </div>
        </div>
        <div className="flex justify-center mb-5">
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
