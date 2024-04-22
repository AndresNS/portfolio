import Hero from "./_components/Hero";
import Experiences from "./(resume)/Experiences";
import TechStack from "./(resume)/TechStack";
import Projects from "./(projects)/Projects";
import ContactForm from "./(contact)/_components/ContactForm";
import Footer from "./_components/Footer";

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Stack */}
      <section
        id="stack"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <h2 className="font-bold md:text-5xl mb-6">My Stack</h2>
        <p className="text-center max-w-[750px] text-lg mb-20 sm:text-xl">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <div className="flex gap-12 mx-auto max-w-[980px] flex-wrap justify-center">
          <TechStack />
        </div>
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="min-h-screen flex flex-col gap-12 items-center justify-center p-28"
      >
        <h2 className="font-bold md:text-5xl mb-6">Experience</h2>
        <Experiences />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen flex flex-col gap-12 items-center justify-center"
      >
        <h2 className="font-bold md:text-5xl mb-6">Projects</h2>
        <p className="text-center max-w-[750px] text-lg mb-20 sm:text-xl">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>

        <div className="container mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="container mx-auto flex flex-col gap-12 items-center p-28"
      >
        <h2 className="font-bold md:text-5xl mb-6">Contact</h2>
        <p className="text-center max-w-[750px] text-lg mb-8 sm:text-xl">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <ContactForm />
        <Footer />
      </section>
    </>
  );
}
