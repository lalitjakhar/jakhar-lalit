import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { resumeData } from "@/data/resumeData";

export default function Home() {
  const data = resumeData;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero data={data.main} />
        <About data={data.main} />
        <Portfolio />
        <Resume data={data.resume} />
        <Testimonials data={data.testimonials} />
        <Faq />
        <Contact />
      </main>
      <Footer data={data.main} />
    </>
  );
}
