import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  const t = useTranslations("Index.Hero");

  return (
    <section
      id="about"
      className="relative min-h-screen h-screen mx-auto flex max-w-[980px] flex-col items-center justify-center gap-2 pb-16"
    >
      <h1 className="text-center text-3xl md:text-4xl">Andrés Navarro S.</h1>
      <h2 className="text-center font-bold md:text-6xl">{t("role")}</h2>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        {t("description")}
      </p>

      <Link
        className="absolute bottom-16 flex flex-col items-center"
        href="/#stack"
      >
        <span>scroll down</span>
        <IoIosArrowDown className="text-3xl" />
      </Link>
    </section>
  );
}
