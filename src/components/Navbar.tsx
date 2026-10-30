const links = ["experience", "education", "projects", "skills", "contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#D5DCDF] bg-[#F2F4F3]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold">Allwin</a>
        <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm text-[#5B6B76]">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="capitalize hover:text-[#0E7C66] focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[#0E7C66]">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}