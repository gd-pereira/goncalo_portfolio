import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="w-[1322px] bg-[#0a0a0a] font-sans mx-auto">
      <div className="fade-in-up">
        <Navigation />
      </div>
      <Hero />
      <section id="about" className="fade-in-up fade-in-up-delay-1">
        <About />
      </section>
      <section id="projects" className="fade-in-up fade-in-up-delay-1">
        <Projects />
      </section>
      <section id="contact" className="fade-in-up fade-in-up-delay-2">
        <Contact />
      </section>
    </main>
  );
}
