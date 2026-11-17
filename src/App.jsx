import { useState } from 'react';

const projects = [
  { number: '01', title: 'AI Mock Interview', category: 'AI · Full-stack application', image: '/images/AIMockupCLONE.png', description: 'An interview practice application exploring AI-generated questions, voice interactions, and user authentication. Built as a learning project and extended through hands-on implementation.', tags: ['Next.js', 'Firebase', 'Vapi', 'Gemini'], demo: 'https://ai-mock-interview-u54u.vercel.app/sign-in', featured: true },
  { number: '02', title: 'Zibooka', category: 'Full-stack · E-commerce practice', image: '/images/ZibookaClone.png', description: 'A book-shopping application built to practice full-stack development, browsing experiences, and commerce workflows.', tags: ['MongoDB', 'Express', 'React', 'Node.js'], demo: 'https://zibooka-neon.vercel.app' },
  { number: '03', title: 'Movie Search', category: 'Frontend · Search experience', image: '/images/Search_movie.png', description: 'A searchable movie interface for exploring film information, with a focus on practical JavaScript and UI development.', tags: ['JavaScript', 'React', 'Vite'], demo: 'https://bcot-code.github.io/js-final-proj/' },
  { number: '04', title: 'Dictionary App', category: 'Frontend · API integration', image: '/images/dictionary.png', description: 'A dictionary interface that retrieves definitions from an API and presents them in an easy-to-use layout.', tags: ['React', 'CSS', 'API'], demo: 'https://brilliant-rabanadas-1beb76.netlify.app' },
];

const skills = ['React', 'Next.js', 'JavaScript', 'HTML & CSS', 'Firebase', 'REST APIs', 'Tailwind CSS', 'Git & GitHub'];

function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="wordmark" onClick={closeMenu} aria-label="Barbara, home">BC<span className="wordmark-dot">.</span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '+'}</span></button>
          <nav id="primary-navigation" className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Front-end developer · Austin, TX</p>
            <h1 id="hero-title">Thoughtful digital experiences, <em>built with purpose.</em></h1>
            <p className="hero-description">Hi, I'm Barbara. I build responsive web applications with React, Next.js, and modern tools — and I'm especially curious about the possibilities of AI-powered products.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href="#contact">Let's connect <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-photo-wrap"><img className="hero-photo" src="/images/self.png" alt="Portrait of Barbara" /><span className="photo-caption">Building, learning, creating. / 2026</span></div>
          <div className="hero-bottom"><span>PORTFOLIO / SELECTED WORK</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Projects & explorations<span className="heading-period">.</span></h2></div><p className="section-intro">A selection of applications I've built while learning, experimenting, and developing my craft.</p></div>
            <div className="project-grid">
              {projects.map(project => <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.number}>
                <a href={project.demo} className="project-visual" target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}><img src={project.image} alt={`${project.title} application screenshot`} loading="lazy"/><span className="image-action" aria-hidden="true"><Arrow diagonal /></span></a>
                <div className="project-meta"><span>{project.number} / {project.category}</span><span>PROJECT</span></div>
                <div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><a className="project-visit" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} demo`}><Arrow diagonal /></a></div>
                <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>)}
            </div>
            <p className="project-note">Some projects began as guided learning exercises. I share them to document my hands-on practice and growth.</p>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title"><div className="container about-grid"><div><p className="eyebrow">02 / A little about me</p><h2 id="about-title">Curiosity is my <em>starting point.</em></h2></div><div className="about-copy"><p>My path into development began with a love of solving problems and creating things that people can actually use. After working in administrative and healthcare-related roles, I decided to pursue software development through self-study and a full-stack bootcamp.</p><p>Today I focus on front-end development, accessible interfaces, and exploring how AI can support more useful digital experiences. I'm continuing to grow through real projects, experimentation, and collaboration.</p><h3>Tools I work with</h3><div className="skills-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div><a className="text-link about-github" href="https://github.com/bcot-code" target="_blank" rel="noopener noreferrer">Explore my GitHub <Arrow diagonal /></a></div></div></section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title"><div className="container contact-inner"><p className="eyebrow">03 / Get in touch</p><h2 id="contact-title">Have something in mind?<br/><em>Let's talk.</em></h2><p>I'm interested in connecting with teams, founders, and people building thoughtful products. I'd love to hear about your ideas or opportunities.</p><div className="contact-actions"><a className="button button-light" href="mailto:bcort49@gmail.com">Send me an email <Arrow diagonal /></a><a className="contact-social" href="https://www.linkedin.com/in/barbara-c-874a46214" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a><a className="contact-social" href="https://github.com/bcot-code" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Barbara C.</span><span>Designed & built with care.</span><a href="#home">Back to top ↑</a></div></footer>
    </div>
  );
}
