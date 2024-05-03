"use client";

import { useState } from "react";

interface AnimatedTextProps {
  text: string;
}

const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
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
    <h1
      className="text-6xl font-mono font-bold uppercase"
      onMouseOver={handleMouseOver}
      data-value={text}
    >
      {headerText}
    </h1>
  );
};

export default AnimatedText;
