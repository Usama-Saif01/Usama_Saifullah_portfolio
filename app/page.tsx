import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services"; // 👈 Added import
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Services /> {/* 👈 Added component here */}
      <About />
      <Contact />
      <Footer />
    </main>
  );
}