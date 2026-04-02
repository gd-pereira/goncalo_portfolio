import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="w-[1322px] bg-[#0a0a0a] font-sans mx-auto">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
