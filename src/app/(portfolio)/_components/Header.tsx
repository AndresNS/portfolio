import { ModeToggle } from "@/components/ModeToggle";
import { Nav, NavLink } from "@/components/Nav";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="fixed z-50 top-4 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-b w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/#about">
            Andrés<span className="font-bold">NS</span>
          </Link>
          <Nav>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#stack">Stack</NavLink>
            <NavLink href="/#resume">Resume</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#contact">Let's Talk</NavLink>
            <ModeToggle />
          </Nav>
        </div>
      </header>
    </>
  );
}
