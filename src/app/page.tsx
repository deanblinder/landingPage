import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactMe from "./components/ContactMe/ContactMe";
import FullWidthImages from "./components/FullWidthImages/FullWidthImages";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          right: 0,
          width: "100%",
          padding: "10px",

          direction: "rtl",
        }}
      >
        <LanguageSwitcher />
      </div>

      <Hero />
      <AboutMe />
      <Projects />
      <ImageGallery />
      <FullWidthImages />
      <Pricing />
      <FAQ />
      <Testimonials />
      <ContactMe />
      {/* <Footer /> */}
    </main>
  );
}
