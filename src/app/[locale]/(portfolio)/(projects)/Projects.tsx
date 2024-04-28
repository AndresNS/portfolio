"use client";

import ProjectCard from "./_components/ProjectCard";
import { useTranslations } from "next-intl";
import jsonStringifierThumbnail from "/public/images/projects/json-stringifier/json-stringifier_thumbnail.jpg";
import lifeCounterThumbnail from "/public/images/projects/life-counter/life-counter_thumbnail.jpg";
import yourIdeaThumbnail from "/public/images/projects/your-idea/your-idea_thumbnail.jpg";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("Index.Projects.list");
  const keys = ["0", "1", "2", "3"] as const;
  const projectsData = {
    "0": {
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "AWS Amplify"],
      thumbnail: jsonStringifierThumbnail,
    },
    "1": {
      technologies: ["React Native", "Expo"],
      thumbnail: lifeCounterThumbnail,
    },
    "2": {
      technologies: ["Next.js", "Shadcn/ui", "Tailwind CSS", "Amazon SES"],
      thumbnail: jsonStringifierThumbnail,
    },
    "3": { technologies: [], thumbnail: yourIdeaThumbnail },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="grid gap-4 grid-cols-3"
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
            }}
          />
        ))}
      </motion.div>
    </>
  );
}
