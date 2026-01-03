export default function Projects({ projects }) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <div className="no-projects">
        No projects available.
      </div>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Let&apos;s Do Some Work Together</h2>

      {/* GRID */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* PROJECT IMAGE */}
            <div className="project-image-container">
              <img
                src={project.img}
                alt={project.name}
                className="project-image"
                loading="lazy"
              />

              {/* HOVER OVERLAY */}
              <div className="project-overlay">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* PROJECT INFO */}
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                Tech: <span className="tech-highlight">{project.techUsed}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Inline styles for projects section */}
      <style>{`
        .projects-section {
          padding: 3rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .projects-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #fbbf24;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .no-projects {
          text-align: center;
          color: #9ca3af;
          padding: 5rem 0;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .project-card {
          background: #1a1a1a;
          border: 1px solid #374151;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.2);
        }
        
        .project-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .project-link {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fbbf24;
          border: 2px solid #fbbf24;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .project-link:hover {
          background: #fbbf24;
          color: #000;
        }
        
        .project-info {
          padding: 1.5rem;
        }
        
        .project-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fbbf24;
          margin-bottom: 0.5rem;
        }
        
        .project-description {
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .project-tech {
          font-size: 0.875rem;
          color: #9ca3af;
          font-family: monospace;
        }
        
        .tech-highlight {
          color: #fbbf24;
        }
      `}</style>
    </section>
  );
}

