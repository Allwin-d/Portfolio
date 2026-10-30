import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-3xl font-bold">Projects</h2>
      <div className="mt-10 divide-y divide-[#D5DCDF] border-y border-[#D5DCDF]">
        {projects.map((p) => (
          <article key={p.title} className="grid gap-4 py-8 sm:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="font-display text-2xl font-bold">{p.title}</h3>
              {p.status && <p className="mt-1 text-sm text-[#0E7C66]">{p.status}</p>}
              <div className="mt-4 flex gap-4 text-sm font-medium">
                <a href={p.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#0E7C66]">Code</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#0E7C66]">Live demo</a>}
                {"backendApi" in p && p.backendApi && (
                  <a href={p.backendApi} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#0E7C66]">Backend API</a>
                )}
              </div>
            </div>
            <div>
              <p className="leading-relaxed text-[#2B3A46]">{p.description}</p>
              {Array.isArray(p.highlights) && p.contribution && (
                <div className="mt-4">
                  <h4 className="font-semibold">Highlights</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[#2B3A46]">
                    {p.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <h4 className="mt-4 font-semibold">What I built</h4>
                  <p className="mt-1 leading-relaxed text-[#2B3A46]">{p.contribution}</p>
                </div>
              )}
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border border-[#D5DCDF] bg-white px-3 py-1 text-[#5B6B76]">{s}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}