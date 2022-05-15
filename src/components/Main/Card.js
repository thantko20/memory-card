import React from 'react';

const Card = (props) => {
  const { name, imgSrc, onClick } = props;

  return (
    <div onClick={() => onClick(name)}>
      <img src={imgSrc} alt={`${name}`} />
      <div>{name}</div>
    </div>
  );
};

export default Card;
