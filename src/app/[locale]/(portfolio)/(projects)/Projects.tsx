import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard, { ProjectData } from "./_components/ProjectCard";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Index.Projects.list");
  const keys = ["0", "1", "2", "3"] as const;
  const technologies = {
    "0": ["Next.js", "Typescript", "Tailwind CSS", "AWS Amplify"],
    "1": ["React Native", "Expo"],
    "2": ["Next.js", "Shadcn/ui", "Tailwind CSS", "Amazon SES"],
    "3": [],
  };

  return (
    <>
      <Carousel opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          {keys.map((key) => (
            <CarouselItem className="basis-1/3" key={key}>
              <ProjectCard
                project={{
                  type: t(`${key}.type`),
                  title: t(`${key}.title`),
                  description: t(`${key}.description`),
                  technologies: technologies[key],
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
