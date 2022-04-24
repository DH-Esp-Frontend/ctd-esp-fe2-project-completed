/* eslint-disable arrow-body-style */

import { Container } from '../styles';
import { NavDesktop } from 'features/navigation/desktop';
import { NavMobile } from 'features/navigation/mobile';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <Container width="100vw">
      <NavDesktop />
      <NavMobile />
    </Container>
  );
};

export default Navbar;
