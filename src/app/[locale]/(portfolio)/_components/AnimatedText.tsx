"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface AnimatedTextProps {
  text: string;
  component: keyof JSX.IntrinsicElements;
  className?: string;
}

const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  component: Component,
  className,
}) => {
  const [headerText, setHeaderText] = useState(text);

  const runAnimation = () => {
    let iteration = 0;

    const intervalID: NodeJS.Timeout = setInterval(() => {
      const newText = headerText
        .split("")
        .map((_, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setHeaderText(newText);

      if (iteration >= text.length) clearInterval(intervalID);
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseOver = () => runAnimation();

  return (
    <Component
      className={cn("font-mono uppercase", className)}
      onMouseOver={handleMouseOver}
      data-value={text}
    >
      {headerText}
    </Component>
  );
};

export default AnimatedText;
