import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-3xl font-bold">Skills</h2>
      <dl className="mt-10 grid gap-8 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <dt className="font-semibold">{group}</dt>
            <dd className="mt-2 text-[#2B3A46]">{items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}