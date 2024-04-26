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
  level?: number;
  animationDelay: number;
};

export default function StackIcon({
  name,
  label,
  animationDelay,
}: StackIconProps) {
  const Icon = icons[name];
  // on hover show level bars and lower opacity of the rest
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay }}
    >
      <Icon className="text-5xl" />
      {label}
    </motion.div>
  );
}
