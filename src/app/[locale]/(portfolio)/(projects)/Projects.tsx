import ProjectCard from "./_components/ProjectCard";
import { useTranslations } from "next-intl";
import jsonStringifierThumbnail from "/public/images/projects/json-stringifier/json-stringifier_thumbnail.jpg";

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
      thumbnail: jsonStringifierThumbnail,
    },
    "2": {
      technologies: ["Next.js", "Shadcn/ui", "Tailwind CSS", "Amazon SES"],
      thumbnail: jsonStringifierThumbnail,
    },
    "3": { technologies: [], thumbnail: null },
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-3">
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
      </div>
    </>
  );
}
