import React from 'react';
import './TarotCard.css';

const TarotCardSpot = ({ card }) => {
  if (!card) {
    return <div className="tarot-card w-full h-full g-gray-100 p-4 rounded-lg shadow-lg min-h-60">No card selected</div>;
  }

  return (
    <div className="tarot-card">
      <img src={card.image} alt={card.name} className="tarot-card-image" />
      <h2 className="tarot-card-name">{card.name}</h2>
      <p className="tarot-card-description">{card.description}</p>
    </div>
  );
};

export default TarotCard;