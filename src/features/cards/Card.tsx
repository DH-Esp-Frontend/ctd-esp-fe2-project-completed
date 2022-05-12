import React from 'react';
import CardContent from './card-content/CardContent';
import CardPicture from './card-picture/CardPicture';

type ICard = { children: React.ReactNode}

const Card = ({children}: ICard) => (
  <div>
    {children}
  </div>
);

export default Card;
