import React from 'react';
import ValorantLogo from '../../assets/valorant-logo.svg';

const Heading = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <img src={ValorantLogo} alt='Valorant Logo' />
      <h1 className='text-2xl font-bold'>Valorant Memory Card</h1>
    </div>
  );
};

export default Heading;
