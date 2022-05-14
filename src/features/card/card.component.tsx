import { FC, PropsWithChildren } from 'react';
import CardWrapper from 'features/card/card.styles';
import CardImage from 'features/card/card-image.component';
import CardBody from 'features/card/card-body.component';

type CompoundCard = FC<PropsWithChildren<object>> & {
  Image: FC<PropsWithChildren<object>>;
  Body: FC<PropsWithChildren<object>>;
};

const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
  <CardWrapper>{children}</CardWrapper>
);

Card.Image = CardImage;
Card.Body = CardBody;

export default Card;
