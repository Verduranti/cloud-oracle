import React from 'react';
import './TarotCard.css';

const TarotCard = ({ card }) => {
  return (
    <div className="tarot-card">
      <img src={card.image} alt={card.name} className="tarot-card-image" />
      <h2 className="tarot-card-name">{card.name}</h2>
      <p className="tarot-card-description">{card.description}</p>
    </div>
  );
};

export default TarotCard;