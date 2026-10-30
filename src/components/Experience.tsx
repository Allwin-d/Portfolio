import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-3xl font-bold">Experience</h2>
      <ol className="mt-10 space-y-10 border-l-2 border-[#D5DCDF] pl-6">
        {experience.map((e) => (
          <li key={e.role + e.period} className="relative">
            <span className="absolute -left-7.75 top-2 h-2.5 w-2.5 rounded-full bg-[#0E7C66]" />
            <h3 className="text-xl font-semibold">{e.role}, {e.company}</h3>
            <p className="text-sm text-[#5B6B76]">{e.period}</p>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-[#2B3A46]">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}