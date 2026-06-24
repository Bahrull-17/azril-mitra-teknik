import Navbar from "../components/layouts/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import WhyChoosesUs from "../components/sections/WhyChoosesUs";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="whychoosesus">
          <WhyChoosesUs />
        </section>
        <CTA />
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
