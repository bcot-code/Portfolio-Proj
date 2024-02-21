import React from "react";

export default function Projects(props) {
  return (
    <div>
      <div className="content-container container is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        <div className="content">
          <h2 className="mb-4">Let's do some work together</h2>
          {/* Projects */}
          {props.projects.map((project) => (
            <div className="column is-half" key={project.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={project.img} alt="PLACEHOLDER-IMAGE" />
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <p className="title is-5 has-text-weight-light">
                        {project.name}
                      </p>
                    </div>
                  </div>
                  <div className="content has-text-left">
                    {project.description}
                    <br />
                    <br />
                    <br />
                    <div className="content is-family-code">
                      Tech Used: {project.techUsed}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
