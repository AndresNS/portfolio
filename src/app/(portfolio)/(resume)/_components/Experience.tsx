import { Badge } from "@/components/ui/badge";

export interface ExperienceData {
  startDate: string;
  endDate: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

type ExperienceProps = {
  experience: ExperienceData;
};

export function Experience({
  experience: { startDate, endDate, role, company, description, technologies },
}: ExperienceProps) {
  return (
    <article className="grid grid-cols-4 mx-auto gap-4 max-w-[980px]">
      <div className="col-span-1">
        <p className="text-muted-foreground">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="col-span-3">
        <header className="mb-4">
          <h3 className="font-bold">{role}</h3>
          <h4 className="text-muted-foreground">{company}</h4>
        </header>
        <section className="mb-4">
          <p>{description}</p>
        </section>
        <footer>
          <ul className="flex gap-2" aria-label="Technologies used">
            {technologies.map((technology, index) => (
              <li key={index}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </article>
  );
}
