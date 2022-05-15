import React from 'react';
import ValorantLogo from '../../../assets/valorant-log.svg';

const Heading = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <img src={ValorantLogo} alt='Valorant Logo' />
      <h1>Valorant Memory Card Game</h1>
    </div>
  );
};

export default Heading;
