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
          padding: 4rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .projects-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 4rem;
          color: #fbbf24;
          letter-spacing: -0.025em;
        }
        
        .no-projects {
          text-align: center;
          color: #9ca3af;
          padding: 5rem 0;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
          margin: 0 auto;
        }
        
        .project-card {
          background: rgba(26, 26, 26, 0.8); /* Slight transparency */
          backdrop-filter: blur(10px); /* Glass effect */
          border: 1px solid rgba(251, 191, 36, 0.1); /* Subtle yellow border */
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .project-card:hover {
          transform: translateY(-10px); /* Lift effect */
          border-color: #fbbf24;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .project-image-container {
          height: 240px; /* Consistent height */
          background: #2a2a2a; /* Fallback color for missing images */
        }
        
        /* This fixes the 'Broken Image' look while you wait for screenshots */
        .project-image:not([src]), .project-image[src=""] {
          display: none;
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
        
        /* Responsive fix for mobile */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
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
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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

