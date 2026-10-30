import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-shell reveal">
      <p className="eyebrow">Selected work</p>
      <h2 className="section-heading">Projects</h2>
      <p className="section-intro">A few things I’ve built, from full-stack products to responsive shopping experiences.</p>
      <div className="project-list">
        {projects.map((p) => (
          <article key={p.title} className="project-card reveal">
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              {p.status && <p className="project-status">{p.status}</p>}
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">Code ↗</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="project-link">Live demo ↗</a>}
              </div>
              <p className="project-description">{p.description}</p>
              {Array.isArray(p.highlights) && p.contribution && (
                <div className="mt-4">
                  <h4 className="project-subheading">Highlights</h4>
                  <ul className="project-highlights">
                    {p.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <h4 className="project-subheading">What I built</h4>
                  <p className="project-contribution">{p.contribution}</p>
                </div>
              )}
              <ul className="tech-list">
                {p.stack.map((s) => (
                  <li key={s} className="tech-tag">{s}</li>
                ))}
              </ul>
            </div>
            {"images" in p && Array.isArray(p.images) && (
              <div className="project-gallery">
                {p.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="project-image"
                  />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}