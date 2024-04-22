import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard, { ProjectData } from "./_components/ProjectCard";

const projects: ProjectData[] = [
  {
    type: "Website",
    title: "JSON Stringifier",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
  },
  {
    type: "Mobile App",
    title: "TCG Life Counter",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    technologies: ["React Native", "Expo"],
  },
  {
    type: "Website",
    title: "JSON Stringifier",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
  },
  {
    type: "Mobile App",
    title: "TCG Life Counter",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    technologies: ["React Native", "Expo"],
  },
];

export default function Projects() {
  return (
    <>
      <Carousel opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem className="basis-1/3" key={index}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
