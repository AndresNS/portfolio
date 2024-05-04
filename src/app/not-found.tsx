"use client";

import AnimatedText from "./[locale]/(portfolio)/_components/AnimatedText";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function NotFound() {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", inter.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto min-h-dvh flex">
            <section className="flex flex-col flex-1 justify-center items-center">
              <AnimatedText
                text="404"
                component="h1"
                className="text-8xl font-bold mb-2"
              />
              <AnimatedText
                text="Page not found"
                component="p"
                className="text-6xl mb-6"
              />
              <Link href="/" className={buttonVariants({ variant: "outline" })}>
                Go to homepage
              </Link>
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
