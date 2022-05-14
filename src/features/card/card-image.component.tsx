import { FC, PropsWithChildren } from 'react';
import { CardImageWrapper } from 'features/card/card.styles';

const CardImage: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <CardImageWrapper>{children}</CardImageWrapper>
);

export default CardImage;
