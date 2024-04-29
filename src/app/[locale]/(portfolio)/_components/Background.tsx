"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Background() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);

  const numCols = 30;
  const cols = Array.from({ length: numCols }, () => 0);

  const generateCells = (colIndex: number, totalCols: number): number => {
    const distanceToCenter = Math.abs(colIndex - Math.floor(totalCols / 2));

    let minCells;
    let maxCells;
    if (colIndex === 0 || colIndex === totalCols - 1) {
      minCells = 12;
      maxCells = 16;
    } else {
      minCells = 20;
      maxCells = 30 - Math.floor(distanceToCenter / 5);
    }

    return Math.floor(Math.random() * (maxCells - minCells) + 1) + minCells;
  };

  const getCellColor = () => {
    const none = { name: "bg-background", chance: 85 };
    const medium = { name: "bg-muted/80", chance: 12 };
    const light = { name: "bg-muted-foreground/80", chance: 3 };

    const randomNumber = Math.random() * 100;

    if (randomNumber < none.chance) {
      return none.name;
    } else if (randomNumber < none.chance + medium.chance) {
      return medium.name;
    } else {
      return light.name;
    }
  };


  return (
    <motion.div
      style={{ y }}
      className="blur-lg fixed top-0 left-0 bottom-0 z-[-1] w-full flex"
    >
      {cols.map((_, colIndex) => {
        const rows = Array.from(
          { length: generateCells(colIndex, numCols) },
          () => 0,
        );

        return (
          <div key={colIndex} className="flex-1">
            {rows.map((_, rowIndex) => {
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-10 h-10 ${getCellColor()}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}
