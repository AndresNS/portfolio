import Hero from "./_components/Hero";
import Experiences from "./(resume)/Experiences";
import TechStack from "./(resume)/TechStack";
import Projects from "./(projects)/Projects";
import ContactForm from "./(contact)/_components/ContactForm";
import Footer from "./_components/Footer";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import pick from "lodash/pick";
import Background from "./_components/Background";
import AnimatedText from "./_components/AnimatedText";

export default function Portfolio() {
  const t = useTranslations("Index");
  const messages = useMessages();

  return (
    <>
      <Background />
      {/* Hero */}
      <Hero />

      {/* Stack */}
      <section
        id="stack"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <AnimatedText
          text={t("Stack.title")}
          component="h2"
          className="font-bold md:text-5xl mb-12"
        />
        <p className="text-center max-w-[750px] text-lg mb-20 sm:text-xl">
          {t("Stack.description")}
        </p>
        <TechStack />
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="min-h-screen flex flex-col items-center justify-center py-28"
      >
        <AnimatedText
          text={t("Experience.title")}
          component="h2"
          className="font-bold md:text-5xl mb-20"
        />
        <Experiences />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-28"
      >
        <AnimatedText
          text={t("Projects.title")}
          component="h2"
          className="font-bold md:text-5xl mb-12"
        />
        <p className="text-center max-w-[750px] text-lg mb-20 sm:text-xl">
          {t("Projects.description")}
        </p>

        <div className="container mx-auto">
          <NextIntlClientProvider messages={pick(messages, "Index.Projects")}>
            <Projects />
          </NextIntlClientProvider>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="container mx-auto flex flex-col items-center pt-28"
      >
        <AnimatedText
          text={t("Contact.title")}
          component="h2"
          className="font-bold md:text-5xl mb-12"
        />
        <p className="text-center max-w-[750px] text-lg mb-12 sm:text-xl">
          {t("Contact.description")}
        </p>
        <NextIntlClientProvider messages={pick(messages, "Index.Contact.form")}>
          <ContactForm />
        </NextIntlClientProvider>
        <Footer />
      </section>
    </>
  );
}
