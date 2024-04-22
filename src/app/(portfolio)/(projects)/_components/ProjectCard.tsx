import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ProjectData {
  type: string;
  title: string;
  description: string;
  technologies: string[];
}

type ProjectCardProps = {
  project: ProjectData;
};
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <ul className="flex gap-2" aria-label="Technologies used">
            {project.technologies.map((technology, index) => (
              <li key={index}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </>
  );
}
