import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";

export interface ProjectData {
  type: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: StaticImageData | null;
}

type ProjectCardProps = {
  project: ProjectData;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="relative flex h-auto">
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
          <div className="flex-1">
            <p className="text-center">{project.description}</p>
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
      </div>
    </>
  );
}
