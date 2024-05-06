"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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

const animationVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export function Experience({
  experience: { startDate, endDate, role, company, description, technologies },
}: ExperienceProps) {
  return (
    <article className="grid grid-cols-3 md:grid-cols-4 mx-auto gap-4 max-w-[980px]">
      <div className="hidden md:col-span-1 md:block">
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          {startDate} - {endDate}
        </motion.p>
      </div>
      <div className="col-span-3">
        <header className="mb-4">
          <motion.h3
            className="font-bold text-lg"
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.02 }}
          >
            {role.split("").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.5 }}
                variants={animationVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h3>
          <motion.h4
            className="text-muted-foreground font-bold"
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.02 }}
          >
            {company.split("").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.5 }}
                variants={animationVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h4>

          <motion.p
            className="text-muted-foreground md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            {startDate} - {endDate}
          </motion.p>
        </header>
        <section className="mb-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            {description}
          </motion.p>
        </section>
        <footer>
          <motion.ul
            className="flex flex-wrap gap-2"
            aria-label="Technologies used"
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.4 }}
          >
            {technologies.map((technology, index) => (
              <motion.li
                key={index}
                variants={animationVariants}
                transition={{ duration: 1.2 }}
              >
                <Badge>{technology}</Badge>
              </motion.li>
            ))}
          </motion.ul>
        </footer>
      </div>
    </article>
  );
}
