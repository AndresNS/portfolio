import { ModeToggle } from "@/components/ModeToggle";
import { Nav, NavLink } from "@/components/Nav";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <>
      <header className="fixed z-50 top-4 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-b w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/#about">
            Andrés<span className="font-bold">NS</span>
          </Link>
          <Nav>
            <NavLink href="/#about">{t("about")}</NavLink>
            <NavLink href="/#stack">{t("stack")}</NavLink>
            <NavLink href="/#resume">{t("resume")}</NavLink>
            <NavLink href="/#projects">{t("projects")}</NavLink>
            <NavLink href="/#contact">{t("contact")}</NavLink>
            <ModeToggle />
          </Nav>
        </div>
      </header>
    </>
  );
}
