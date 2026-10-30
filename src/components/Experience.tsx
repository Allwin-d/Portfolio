import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-shell reveal">
      <p className="eyebrow">Career journey</p>
      <h2 className="section-heading">Experience</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role + e.period} className="timeline-item">
            <h3>{e.role} <span className="body-copy">at {e.company}</span></h3>
            <p className="timeline-meta">{e.period}</p>
            <ul className="timeline-points">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}