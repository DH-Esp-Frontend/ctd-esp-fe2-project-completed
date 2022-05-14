import { FC, PropsWithChildren } from 'react';
import { CardBodyWrapper } from 'features/card/card.styles';

const CardBody: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <CardBodyWrapper>{children}</CardBodyWrapper>
);

export default CardBody;
