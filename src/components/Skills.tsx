import type { SimpleIcon } from "simple-icons";
import {
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siJira,
  siJavascript,
  siJsonwebtokens,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siRedux,
  siTailwindcss,
  siTanstack,
  siTypescript,
} from "simple-icons";
import { skills } from "../data/portfolio";

const skillIcons: Record<string, SimpleIcon> = {
  React: siReact,
  TypeScript: siTypescript,
  "JavaScript (ES6+)": siJavascript,
  Redux: siRedux,
  "TanStack Query": siTanstack,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  Express: siExpress,
  "Prisma ORM": siPrisma,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  MySQL: siMysql,
  "JWT auth": siJsonwebtokens,
  "Git & GitHub": siGithub,
  JIRA: siJira,
  Postman: siPostman,
  "Docker (basic)": siDocker,
  Git: siGit,
};

const skillMarks: Record<string, string> = {
  "REST APIs": "API",
  "Data Structures & Algorithms": "DSA",
  "Object-Oriented Programming": "OOP",
  DBMS: "DB",
  "Operating Systems": "OS",
  "Computer Networks": "CN",
  "Agile / Scrum": "AG",
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell reveal">
      <p className="eyebrow">My toolkit</p>
      <h2 className="section-heading">Skills</h2>
      <dl className="skills-list">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="skill-row">
            <dt className="skill-category">{group}</dt>
            <dd className="skill-items">
              {items.map((item) => {
                const icon = skillIcons[item];
                const mark = skillMarks[item] ?? item.slice(0, 2).toUpperCase();

                return (
                  <span key={item} className="skill-chip">
                    <span
                      className="skill-icon"
                      style={icon ? { color: `#${icon.hex}` } : undefined}
                    >
                      {icon ? (
                        <svg viewBox="0 0 24 24" role="img" aria-label={`${item} logo`}>
                          <path d={icon.path} />
                        </svg>
                      ) : (
                        <span aria-hidden="true">{mark}</span>
                      )}
                    </span>
                    <span>{item}</span>
                  </span>
                );
              })}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}