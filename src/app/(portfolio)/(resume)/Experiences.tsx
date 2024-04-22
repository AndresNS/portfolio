import { Experience, ExperienceData } from "./_components/Experience";

const experiences: ExperienceData[] = [
  {
    startDate: "July 2023",
    endDate: "October 2023",
    role: "Software Development Consultant",
    company: "Tester app",
    description:
      "I led and advised a collaborative project with an external company, participating in the definition of its priorities and requirements. I provided technical solutions and recommendations based on my experience with technologies such as React, AWS, and the Serverless Framework. I collaborated in decision-making with both teams, contributing to planning, reviewing key milestones, and making necessary adjustments to achieve efficient development aligned with the project's objectives.",
    technologies: [
      "React",
      "Next.js",
      "AWS",
      "DynamoDB",
      "Serverless Framework",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    startDate: "February 2022",
    endDate: "June 2023",
    role: "Technical Lead and Full Stack Developer",
    company: "Tester app",
    description:
      "As the leader of a development team at Tester App, I directed the creation and delivery of technological solutions, focusing on full-stack architecture and development. My responsibilities included designing the architecture and developing applications with React and Next.js, creating databases in DynamoDB, automating development processes through CI/CD workflows with CodePipeline and CodeBuild, as well as overseeing and training the team with a human-centric approach to foster professional growth. I established effective communication with business counterparts and product managers in both internal and external projects.",
    technologies: [
      "React",
      "Next.js",
      "AWS",
      "DynamoDB",
      "Serverless Framework",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    startDate: "February 2021",
    endDate: "September 2021",
    role: "Full Stack Developer",
    company: "Tester app",
    description:
      "As a full-stack developer at Tester, I focused on architecture and development, using technologies such as React and Next.js on the front-end, and AWS with the Serverless Framework on the back-end. My responsibilities included designing and developing applications with React, Next.js, and AWS services, collaborating on the design and modeling of databases in DynamoDB, and implementing development workflows through CI/CD automation using tools like CodePipeline and CodeBuild.",
    technologies: [
      "React",
      "Next.js",
      "AWS",
      "DynamoDB",
      "Serverless Framework",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    startDate: "September 2020",
    endDate: "January 2021",
    role: "Professional Internship as a Developer",
    company: "CORPA Market Studies",
    description:
      "During my professional internship as a Developer, I specialized in designing and developing models and access patterns in NoSQL databases, with a focus on DynamoDB. Additionally, I contributed to the design and development of microservices in AWS cloud environments using the Serverless Framework. I also automated CI/CD processes in AWS environments and participated in the design and documentation of APIs to facilitate effective communication within the development team.",
    technologies: [
      "React",
      "AWS",
      "DynamoDB",
      "Serverless Framework",
      "Material UI",
    ],
  },
];

export default function Experiences() {
  return (
    <>
      {experiences.map((experience, index) => (
        <Experience experience={experience} key={index} />
      ))}
    </>
  );
}
