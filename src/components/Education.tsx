import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-3xl font-bold">Education</h2>
      <ol className="mt-10 space-y-8 border-l-2 border-[#D5DCDF] pl-6">
        {education.map((item) => (
          <li key={item.institution} className="relative">
            <span className="absolute -left-7.75 top-2 h-2.5 w-2.5 rounded-full bg-[#0E7C66]" />
            <h3 className="text-xl font-semibold">{item.institution}</h3>
            <p className="mt-1 text-[#2B3A46]">{item.qualification}</p>
            {(item.period || item.location) && (
              <p className="mt-1 text-sm text-[#5B6B76]">
                {[item.period, item.location].filter(Boolean).join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
