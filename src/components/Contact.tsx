import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-shell reveal">
      <div className="contact-panel">
        <p className="eyebrow">Get in touch</p>
        <h2>Let’s build something.</h2>
        <p>Open to full stack roles and interesting projects. Email is the fastest way to reach me.</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="button-primary">{profile.email} <span aria-hidden="true">↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary">GitHub ↗</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="button-secondary">{profile.phone}</a>
        </div>
      </div>
    </section>
  );
}