import React from "react";
import { motion } from "framer-motion";

const Spread = ({ cards }) => {
  return (
    <div className="flex justify-center gap-4 p-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative w-32 h-48 bg-gray-200 rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover rounded-lg"
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
