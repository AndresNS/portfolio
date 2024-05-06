import { useTranslations } from "next-intl";
import Header from "./_components/header/Header";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations("Header");
  return (
    <>
      <div className="relative">
        <Header
          items={[
            { href: "/#about", text: t("about") },
            { href: "/#stack", text: t("stack") },
            { href: "/#resume", text: t("resume") },
            { href: "/#projects", text: t("projects") },
            { href: "/#contact", text: t("contact") },
          ]}
        />
        <div>{children}</div>
      </div>
    </>
  );
}
