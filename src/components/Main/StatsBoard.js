import React from 'react';

const StatsBoard = (props) => {
  const { level, score, highestScore } = props;

  return (
    <div>
      <h2>Level: {level}</h2>
      <div>
        <div>Score: {score}</div>
        <div>Highest Score: {highestScore}</div>
      </div>
    </div>
  );
};

export default StatsBoard;
