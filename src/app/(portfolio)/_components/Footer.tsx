import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center py-16 mt-16">
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
