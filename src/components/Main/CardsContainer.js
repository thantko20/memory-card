import React from 'react';
import Card from './Card';

const CardsContainer = (props) => {
  const { cards, onCardClick } = props;

  return (
    <div>
      {cards.map((card) => (
        <Card
          name={card.agentName}
          imgSrc={card.displayIcon}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
