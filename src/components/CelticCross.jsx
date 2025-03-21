import React from "react";
import { motion } from "motion/react"

const CelticCross = ({ drawnCards = [] }) => {

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-x-15 gap-y-5 w-full max-w-3xl mx-auto relative">
            {[...Array(6)].map((_, index) => {
                const positions = [
                    "row-start-2 col-start-2", // First card (center)
                    "row-start-2 col-start-2", // Second card (same position, rotated)
                    "row-start-2 col-start-1", // 3rd card (middle left)
                    "row-start-2 col-start-3", // 4th card (middle right)
                    "row-start-1 col-start-2", // 5th card (top center)
                    "row-start-3 col-start-2"  // 6th card (bottom center)
                ];

                const card = drawnCards[index]; // Get the card if it's been drawn
                
                return (
                    <div
                        key={`card-${index}`}
                        className={`aspect-[2/3] w-full h-full rounded-lg flex justify-center items-center
          relative ${(card || index === 1) ? "" : "border-dotted border-2 border-gray-400"} ${positions[index]} `}
                    >
                        {/* Dotted placeholder for the rotated card (second card) */}
                        {index === 1 && !card && (
                            <div className="absolute top-0 left-0 rotate-90 w-full h-full rounded-lg border-2 border-dotted border-gray-400"></div>
                        )}
                        {card ? (
                            <img
                                src={card.image}
                                alt={card.name}
                                className={`w-full h-full object-contain rounded-lg 
              ${index === 1 ? "absolute top-0 left-0 rotate-90" : ""}`}
                            />
                        ) : (
                            <span className="text-gray-400">Empty</span> // Placeholder content
                        )}
                    </div>
                );
            })}
        </div>

    );
};

export default CelticCross;
