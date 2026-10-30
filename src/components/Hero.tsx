import profilePhoto from "../assets/Allwin_img.jpg";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-content hero-enter">
        <p className="eyebrow">{profile.role} · {profile.location}</p>
        <h1 className="hero-title">
          Building thoughtful
          <span>digital experiences.</span>
        </h1>
        <p className="hero-copy">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="button-primary">Explore my work <span aria-hidden="true">↘</span></a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary">GitHub <span aria-hidden="true">↗</span></a>
          <a href="/Allwin_Selva_D_Resume.pdf" download className="button-secondary">Download resume <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <figure className="hero-portrait">
        <img src={profilePhoto} alt={`${profile.name}, ${profile.role}`} fetchPriority="high" />
      </figure>
    </section>
  );
}