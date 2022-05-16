import React from 'react';

const Card = (props) => {
  const { name, imgSrc, onClick } = props;

  return (
    <div
      onClick={() => onClick(name)}
      className='bg-gradient-to-r from-red-200 via-purple-500 to-rose-500 w-[150px] bg-slate-700 text-center rounded-md overflow-hidden transition duration-500 cursor-pointer hover:translate-y-[-8px] hover:scale-105'
    >
      <img src={imgSrc} alt={`${name}`} className='w-full aspect-square' />
      <div className='bg-white opacity-50 text-red-900 font-bold text-sm'>
        {name}
      </div>
    </div>
  );
};

export default Card;
