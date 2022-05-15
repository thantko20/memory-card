import React from 'react';
import CardsContainer from './CardsContainer';
import StatsBoard from './StatsBoard';

const Main = (props) => {
  const { agentsData, handleOnCardClick, level, score, highScore } = props;

  return (
    <div>
      <StatsBoard level={level} score={score} highScore={highScore} />
      <CardsContainer cards={agentsData} onCardClick={handleOnCardClick} />
    </div>
  );
};

export default Main;
