"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiAmazonaws,
  SiAmazondynamodb,
  SiGit,
  SiMongodb,
  SiServerless,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
} from "react-icons/si";

const icons: Record<string, IconType> = {
  html5: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  reactjs: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  aws: SiAmazonaws,
  dynamodb: SiAmazondynamodb,
  git: SiGit,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  serverless: SiServerless,
  ruby: SiRuby,
  rails: SiRubyonrails,
};

type StackIconProps = {
  name: string;
  label: string;
  level: number;
  animationDelay: number;
};

export default function StackIcon({
  name,
  label,
  level,
  animationDelay,
}: StackIconProps) {
  const Icon = icons[name];

  const renderProgressBar = (level: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        className={`w-2 h-2 ${index < level ? "bg-muted-foreground" : "bg-muted"}`}
      ></div>
    ));
  };

  return (
    <motion.div
      className="flex flex-col group min-w-24 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay }}
    >
      <Icon className="text-5xl mb-8" />
      <div className="relative w-full flex justify-center items-center">
        <p className="absolute group-hover:opacity-0 transition-[opacity] ease-in duration-400">{label}</p>
        <div className="absolute opacity-0 group-hover:opacity-100 flex justify-center gap-1 transition-[opacity] ease-in duration-400">
          {renderProgressBar(level)}
        </div>
      </div>
    </motion.div>
  );
}
