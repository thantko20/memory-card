import React from 'react';
import CardsContainer from './CardsContainer';
import StatsBoard from './StatsBoard';

const Main = (props) => {
  const { cards, handleOnCardClick, level, score, highScore } = props;

  return (
    <div className='p-6 flex flex-col items-center gap-6'>
      <StatsBoard level={level} score={score} highScore={highScore} />
      <CardsContainer cards={cards} onCardClick={handleOnCardClick} />
    </div>
  );
};

export default Main;
