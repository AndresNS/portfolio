import TechIcon from "./_components/TechIcon";

interface Technology {
  name: string;
  label: string;
  level: number;
}

const technologies: Technology[] = [
  { name: "html5", label: "HTML5", level: 5 },
  { name: "css", label: "CSS3", level: 5 },
  { name: "javascript", label: "Javascript", level: 5 },
  { name: "typescript", label: "Typescript", level: 3 },
  { name: "tailwind", label: "TailwindCSS", level: 4 },
  { name: "reactjs", label: "React.js", level: 4 },
  { name: "nextjs", label: "Next.js", level: 3 },
  { name: "nodejs", label: "NodeJS", level: 3 },
  { name: "aws", label: "AWS", level: 3 },
  { name: "dynamodb", label: "DynamoDB", level: 4 },
  { name: "git", label: "Git", level: 4 },
  { name: "mongodb", label: "MongoDB", level: 3 },
  { name: "postgresql", label: "PostgreSQL", level: 3 },
  { name: "serverless", label: "Serverless", level: 4 },
];

export default function TechStack() {
  return (
    <>
      {technologies.map((technology, index) => (
        <TechIcon
          name={technology.name}
          label={technology.label}
          animationDelay={index * 0.04}
          key={index}
        />
      ))}
    </>
  );
}
