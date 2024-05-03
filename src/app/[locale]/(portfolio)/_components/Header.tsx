"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Nav, NavLink } from "@/components/Nav";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

interface NavItem {
  href: string;
  text: string;
}

type HeaderProps = {
  items: NavItem[];
};

export default function Header({ items }: HeaderProps) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <header className="fixed z-50 top-4 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-b w-full">
        <motion.div
          className="absolute top-0 left-0 right-0 h-full z-[-1] bg-foreground/5 origin-left"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/#about">
            Andrés<span className="font-bold">NS</span>
          </Link>
          <Nav>
            {items.map((item, index) => (
              <NavLink key={index} href={item.href}>
                {item.text}
              </NavLink>
            ))}
            <ModeToggle />
          </Nav>
        </div>
      </header>
    </>
  );
}
