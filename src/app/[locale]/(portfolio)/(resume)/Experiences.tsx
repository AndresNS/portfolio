import { useTranslations } from "next-intl";
import { Experience } from "./_components/Experience";

const technologies = {
  "1": [
    "React",
    "Next.js",
    "AWS",
    "DynamoDB",
    "Serverless Framework",
    "Material UI",
    "Tailwind CSS",
  ],
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
  "4": ["React", "AWS", "DynamoDB", "Serverless Framework", "Material UI"],
};

export default function Experiences() {
  const t = useTranslations("Experiences");
  const keys = ["1", "2", "3", "4"] as const;

  return (
    <div className="flex flex-col gap-12">
      {keys.map((key) => (
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
