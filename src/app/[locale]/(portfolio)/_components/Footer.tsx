import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";
import LocalSwitcher from "@/components/LocalSwitcher";

export default function Footer() {
  const messages = useMessages();

  return (
    <>
      <footer className="relative flex w-full justify-center py-16 mt-16">
        <div className="absolute left-0">
          <NextIntlClientProvider messages={pick(messages, "Languages")}>
            <LocalSwitcher />
          </NextIntlClientProvider>
        </div>
        <div className="flex gap-4 text-3xl">
          <Link href="https://github.com/andresns" target="_blank">
            <SiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andres-navarro-silva"
            target="_blank"
          >
            <SiLinkedin />
          </Link>
        </div>
      </footer>
    </>
  );
}
