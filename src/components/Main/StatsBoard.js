import React from 'react';

const StatsBoard = (props) => {
  const { level, score, highScore } = props;

  return (
    <div className='flex items-center gap-4'>
      <h2>
        Level: <span className='font-bold text-lg text-red-400'>{level}</span>
      </h2>
      <div>
        <div>
          Score:{' '}
          <span className='font-bold text-lg text-indigo-400'>{score}</span>
        </div>
        <div>
          High Score:{' '}
          <span className='font-bold text-lg text-emerald-400'>
            {highScore}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsBoard;
