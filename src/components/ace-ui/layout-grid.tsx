"use client";
import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  title: string;
};

interface LayoutGridProps {
  cards: Card[];
  masterImage: string; // Single image to be split
  columns?: number; // How many columns to split the image into
  rows?: number; // How many rows to split the image into
}

export const LayoutGrid = ({
  cards,
  masterImage,
  columns = 3,
  rows = 3,
}: LayoutGridProps) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  // Calculate grid layout based on number of cards and provided columns
  const getGridCols = () => {
    if (columns === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    if (columns === 3) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    if (columns === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1 md:grid-cols-3";
  };

  // Calculate how many cards should span multiple columns in the last row
  const getCardSpanClass = (index: number) => {
    const totalCards = cards.length;
    const cardsPerRow = columns;
    const completeRows = Math.floor(totalCards / cardsPerRow);
    const lastRowStartIndex = completeRows * cardsPerRow;
    const cardsInLastRow = totalCards - lastRowStartIndex;
    const isInLastRow = index >= lastRowStartIndex;

    // Only apply spanning if we're in the last row and it's incomplete
    if (isInLastRow && cardsInLastRow < cardsPerRow && cardsInLastRow > 0) {
      const indexInLastRow = index - lastRowStartIndex;

      if (columns === 4) {
        if (cardsInLastRow === 1) {
          // 1 card in 4-column row: span all 4
          return "col-span-1 md:col-span-2 lg:col-span-4";
        } else if (cardsInLastRow === 2) {
          // 2 cards in 4-column row: each spans 2
          return "col-span-1 md:col-span-1 lg:col-span-2";
        } else if (cardsInLastRow === 3) {
          // 3 cards in 4-column row: first two span 1, last spans 2
          if (indexInLastRow === 2) {
            return "col-span-1 md:col-span-2 lg:col-span-2";
          }
          return "col-span-1 md:col-span-1 lg:col-span-1";
        }
      } else if (columns === 3) {
        if (cardsInLastRow === 1) {
          // 1 card in 3-column row: span all 3
          return "col-span-1 md:col-span-2 lg:col-span-3";
        } else if (cardsInLastRow === 2) {
          // 2 cards in 3-column row: first spans 2, second spans 1
          if (indexInLastRow === 0) {
            return "col-span-1 md:col-span-1 lg:col-span-2";
          }
          return "col-span-1 md:col-span-1 lg:col-span-1";
        }
      }
    }

    return "col-span-1";
  };

  const getImageCropStyle = (index: number) => {
    const row = Math.floor(index / columns);
    const col = index % columns;

    const cropX = (col / columns) * 100;
    const cropY = (row / rows) * 100;

    return {
      objectPosition: `${cropX}% ${cropY}%`,
      transform: `scale(${columns}, ${rows})`,
      transformOrigin: `${cropX}% ${cropY}%`,
    };
  };

  return (
    <div
      className={cn("w-full h-full grid mx-auto gap-4 relative", getGridCols())}
    >
      {cards.map((card, i) => (
        <motion.div
          key={`container-${card.id}`}
          className={cn(getCardSpanClass(i))}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "rounded-lg absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full min-h-[200px]"
                : "bg-white rounded-xl h-full w-full min-h-[200px]"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage
              card={card}
              masterImage={masterImage}
              cropStyle={getImageCropStyle(i)}
            />
            <h3
              className={`absolute bottom-4 left-4 text-white text-xl font-bold z-10 drop-shadow-lg ${
                card.id === selected?.id && "hidden"
              }`}
            >
              {card.title}
            </h3>
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({
  card,
  masterImage,
  cropStyle,
}: {
  card: Card;
  masterImage: string;
  cropStyle: React.CSSProperties;
}) => {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <Image
        src={masterImage}
        height="1000"
        width="1000"
        className={cn("object-cover transition duration-200 h-full w-full")}
        style={cropStyle}
        alt={card.title}
      />
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
