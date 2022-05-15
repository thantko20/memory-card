import React from 'react';

const Card = (props) => {
  const { name, imgSrc } = props;

  return (
    <div>
      <img src={imgSrc} alt={`${name}`} />
      <div>{name}</div>
    </div>
  );
};

export default Card;
