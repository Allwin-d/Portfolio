import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
      <p className="mb-4 text-[#5B6B76]">{profile.role} · {profile.location}</p>
      <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-8xl">
        {profile.name}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#2B3A46]">{profile.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#projects" className="rounded bg-[#0E7C66] px-5 py-3 font-medium text-white hover:bg-[#0B6553]">
          See my projects
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="rounded border border-[#12202B] px-5 py-3 font-medium hover:bg-[#12202B] hover:text-white">
          GitHub
        </a>
        <a href="/Allwin_Selva_D_Resume.pdf" download className="rounded border border-[#12202B] px-5 py-3 font-medium hover:bg-[#12202B] hover:text-white">
          Download Resume
        </a>
      </div>
    </section>
  );
}