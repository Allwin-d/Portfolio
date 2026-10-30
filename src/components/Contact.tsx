import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-4xl font-extrabold sm:text-6xl">Let’s build something.</h2>
      <p className="mt-6 max-w-lg text-lg text-[#2B3A46]">Open to full stack roles and interesting projects. Email is the fastest way to reach me.</p>
      <a href={`mailto:${profile.email}`} className="mt-8 inline-block rounded bg-[#0E7C66] px-6 py-3 font-medium text-white hover:bg-[#0B6553]">
        {profile.email}
      </a>
      <div className="mt-6 flex gap-6 text-sm underline underline-offset-4">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
      </div>
    </section>
  );
}