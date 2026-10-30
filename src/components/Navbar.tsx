import { useState } from "react";

const links = ["experience", "education", "projects", "skills", "contact"];

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="#top" className="brand-mark" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-dot" aria-hidden="true">A</span>
          Allwin Selva D
        </a>
        <ul className={`nav-links${isMenuOpen ? " is-open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-controls">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
            <span className="hidden sm:inline">{theme === "light" ? "Dark" : "Light"}</span>
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}