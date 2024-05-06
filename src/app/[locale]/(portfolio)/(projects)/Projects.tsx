"use client";

import ProjectCard from "./_components/ProjectCard";
import { useTranslations } from "next-intl";
import jsonStringifierThumbnail from "/public/images/projects/json-stringifier/json-stringifier_thumbnail.jpg";
import lifeCounterThumbnail from "/public/images/projects/life-counter/life-counter_thumbnail.jpg";
import yourIdeaThumbnail from "/public/images/projects/your-idea/your-idea_thumbnail.jpg";
import portfolioThumbnail from "/public/images/projects/portfolio/portfolio_thumbnail.jpg";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("Index.Projects.list");
  const keys = ["0", "1", "2", "3"] as const;
  const projectsData = {
    "0": {
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "AWS Amplify"],
      thumbnail: jsonStringifierThumbnail,
      repository: "https://github.com/AndresNS/simple-json-stringifier",
      deployment: "https://main.d3vrcznmxcfs9x.amplifyapp.com",
    },
    "1": {
      technologies: ["React Native", "Expo"],
      thumbnail: lifeCounterThumbnail,
      repository: "https://github.com/AndresNS/life-counter",
      deployment: null,
    },
    "2": {
      technologies: ["Next.js", "Shadcn/ui", "Tailwind CSS", "Amazon SES"],
      thumbnail: portfolioThumbnail,
      repository: "https://github.com/AndresNS/portfolio",
      deployment: null,
    },
    "3": {
      technologies: [],
      thumbnail: yourIdeaThumbnail,
      repository: null,
      deployment: null,
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {keys.map((key) => (
          <ProjectCard
            key={key}
            project={{
              type: t(`${key}.type`),
              title: t(`${key}.title`),
              description: t(`${key}.description`),
              technologies: projectsData[key].technologies,
              thumbnail: projectsData[key].thumbnail,
              repository: projectsData[key].repository,
              deployment: projectsData[key].deployment,
            }}
          />
        ))}
      </motion.div>
    </>
  );
}
