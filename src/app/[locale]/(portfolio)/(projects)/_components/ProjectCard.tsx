"use client";

import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { IoRocketSharp } from "react-icons/io5";

export interface ProjectData {
  type: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: StaticImageData | null;
  repository: string | null;
  deployment: string | null;
}

type ProjectCardProps = {
  project: ProjectData;
};

const animationVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <motion.div
        transition={{ duration: 0.5 }}
        variants={animationVariants}
        className="relative flex h-auto"
      >
        {project.thumbnail && (
          <Image
            className="w-full"
            src={project.thumbnail}
            alt={project.title}
            quality={100}
          />
        )}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-background/80 opacity-0 hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col">
          <h3 className="text-center font-bold text-2xl mb-6">
            {project.title}
          </h3>
          <div className="flex-1 flex flex-col">
            <p className="text-center mb-8">{project.description}</p>
            <div className="flex justify-center items-center text-3xl gap-4">
              {project.repository && (
                <Link href={project.repository} target="_blank">
                  <SiGithub />
                </Link>
              )}
              {project.deployment && (
                <Link href={project.deployment} target="_blank">
                  <IoRocketSharp />
                </Link>
              )}
            </div>
          </div>
          <ul
            className="flex flex-wrap gap-2 justify-center"
            aria-label="Technologies used"
          >
            {project.technologies.map((technology, index) => (
              <li key={index}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
