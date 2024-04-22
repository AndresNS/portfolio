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
};

export default function StackIcon({ name, label }: StackIconProps) {
  const Icon = icons[name];
  // on hover show level bars and lower opacity of the rest
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="text-5xl" />
      {label}
    </div>
  );
}
