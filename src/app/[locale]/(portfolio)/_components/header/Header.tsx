"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { HeaderProps } from "./types";
import { ModeToggle } from "@/components/ModeToggle";

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
          <Link href="/#about" className="py-4">
            Andrés<span className="font-bold">NS</span>
          </Link>
          <div className="flex md:flex-row-reverse items-center gap-4 ">
            <ModeToggle />
            <MainNav items={items} />
            <MobileNav items={items} />
          </div>
        </div>
      </header>
    </>
  );
}
