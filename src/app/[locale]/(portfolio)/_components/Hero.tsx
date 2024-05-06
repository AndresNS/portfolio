import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const t = useTranslations("Index.Hero");

  return (
    <section
      id="about"
      className="relative min-h-screen h-screen mx-auto flex max-w-[980px] flex-col items-center justify-center gap-2 pb-16 px-6"
    >
      <h1 className="text-center text-2xl mb-2 md:text-4xl">Andrés Navarro S.</h1>
      <AnimatedText text={t("role")} component="h2" className="text-center text-4xl md:text-5xl font-bold mb-4"/>
      <p className="max-w-[750px] text-center text-muted-foreground text-lg md:text-xl">
        {t("description")}
      </p>

      <Link className="absolute bottom-16 flex items-center p-4" href="/#stack">
        <IoIosArrowDown className="text-3xl animate-floating" />
      </Link>
    </section>
  );
}
