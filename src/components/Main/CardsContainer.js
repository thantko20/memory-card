import React from 'react';
import Card from './Card';
import uniqid from 'uniqid';

const CardsContainer = (props) => {
  const { cards, onCardClick } = props;

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 justify-center gap-7 mt-6'>
      {cards.map((card) => (
        <Card
          name={card.displayName}
          imgSrc={card.displayIcon}
          onClick={onCardClick}
          key={uniqid()}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
