import React from 'react';

type ICard = { children: React.ReactNode };

const Card = ({ children }: ICard) => <div>{children}</div>;

export default Card;
