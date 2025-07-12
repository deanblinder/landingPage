import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactMe from "./components/ContactMe/ContactMe";

export default function Home() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(120deg, #f0f4ff 0%, #fff 100%)" }}>
      <Hero />
      <AboutMe />
      <Projects />
      <Pricing />
      <Testimonials />
      <ContactMe />
    </main>
  );
}
