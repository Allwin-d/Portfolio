import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-shell reveal">
      <p className="eyebrow">Learning</p>
      <h2 className="section-heading">Education</h2>
      <ol className="timeline">
        {education.map((item) => (
          <li key={item.institution} className="timeline-item">
            <h3>{item.institution}</h3>
            <p className="education-qualification">{item.qualification}</p>
            {(item.period || item.location) && (
              <p className="timeline-meta">
                {[item.period, item.location].filter(Boolean).join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
