import React from "react";
import { motion } from "motion/react"

const Spread = ({ drawnCards = [] }) => {

  // const [drawnCards, setDrawnCards] = React.useState([]);

  // React.useEffect(() => {
  //   setDrawnCards(drawCards(deck)); // Call the function to draw cards when component mounts
  // }, []);

  // If drawnCards is empty, display a placeholder message
  if (drawnCards.length === 0) {
    return (
      <div className="flex flex-col items-center w-2/3">
        <h2 className="text-xl mb-4">Your Spread</h2>
        <p>No cards drawn yet. Draw some cards!</p>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center gap-4 p-4">
      {drawnCards.map((card, index) => (
        <motion.div
          key={index}
          className="relative w-50 h-90 bg-gray-200 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={card.image}
            alt={card.name}
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-2 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-1 rounded-b-lg">
            {card.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Spread;
