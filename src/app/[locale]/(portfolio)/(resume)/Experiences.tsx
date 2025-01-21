import { useTranslations } from "next-intl";
import { Experience } from "./_components/Experience";

const technologies = {
  "1": ["React", "AWS", "DynamoDB", "Serverless Framework", "Material UI"],
  "2": [
    "React",
    "Next.js",
    "AWS",
    "DynamoDB",
    "Serverless Framework",
    "Material UI",
    "Tailwind CSS",
  ],
  "3": [
    "React",
    "Next.js",
    "AWS",
    "DynamoDB",
    "Serverless Framework",
    "Material UI",
    "Tailwind CSS",
  ],
  "4": [
    "React",
    "Next.js",
    "AWS",
    "DynamoDB",
    "Serverless Framework",
    "Material UI",
    "Tailwind CSS",
  ],
  "5": [
    "React",
    "React Native",
    "Redux Saga",
    "Typescript",
    "Tailwind CSS",
    "Jira",
    "Scrum",
  ],
};

export default function Experiences() {
  const t = useTranslations("Experiences");
  const keys = Object.keys(technologies) as Array<keyof typeof technologies>;

  return (
    <div className="flex flex-col gap-12 px-6">
      {keys.reverse().map((key) => (
        <Experience
          experience={{
            startDate: t(`${key}.startDate`),
            endDate: t(`${key}.endDate`),
            role: t(`${key}.role`),
            company: t(`${key}.company`),
            description: t(`${key}.description`),
            technologies: technologies[key],
          }}
          key={key}
        />
      ))}
    </div>
  );
}
