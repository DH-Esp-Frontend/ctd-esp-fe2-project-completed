/* eslint-disable arrow-body-style */

import { Container } from '../styles';
import { NavDesktop } from 'features/navigation/desktop';
import { NavMobile } from 'features/navigation/mobile';

const Navbar = () => {
  return (
    <Container width="100vw">
      <NavDesktop />
      <NavMobile />
    </Container>
  );
};

export default Navbar;
