import { useTranslations } from "next-intl";
import Link from "next/link";
import AnimatedText from "./(portfolio)/_components/AnimatedText";
import { buttonVariants } from "@/components/ui/button";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="container mx-auto min-h-dvh flex">
      <section className="flex flex-col flex-1 justify-center items-center">
        <AnimatedText
          text="404"
          component="h1"
          className="text-8xl font-bold mb-2"
        />
        <AnimatedText
          text={t("text")}
          component="p"
          className="text-6xl mb-6"
        />
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          {t("backButton")}
        </Link>
      </section>
    </div>
  );
}
