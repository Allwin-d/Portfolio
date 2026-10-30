import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F4F3] font-sans text-[#12202B]">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-[#D5DCDF] py-6 text-center text-sm text-[#5B6B76]">
        © {new Date().getFullYear()} Allwin Selva D
      </footer>
    </div>
  );
}
