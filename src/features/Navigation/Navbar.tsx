/* eslint-disable arrow-body-style */

import { Container } from '../../styles';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Navbar = () => {
  return (
    <Container width="100vw">
      <NavDesktop />
      <NavMobile />
    </Container>
  );
};

export default Navbar;
