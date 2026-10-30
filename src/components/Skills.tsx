import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell reveal">
      <p className="eyebrow">My toolkit</p>
      <h2 className="section-heading">Skills</h2>
      <dl className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="skill-card">
            <dt className="font-semibold">{group}</dt>
            <dd>{items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}