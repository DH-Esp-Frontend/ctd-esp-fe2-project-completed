/* eslint-disable arrow-body-style */

import { Container, LinkStyled, Logo } from 'styles';
import icon from '../assets/logo-dh.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Container
      width="100vw"
      justifyContent="space-between"
      display="flex"
      height="30vh"
      textAlign="center"
      alignItems="center">
      <Container display="flex" width="400px" justifyContent="space-around">
        <LinkStyled to="/">
          <Logo src={icon} />
        </LinkStyled>
        <LinkStyled to="/about">
          <h3>About</h3>
        </LinkStyled>
        <LinkStyled to="/favs">
          <h3>Favorites</h3>
        </LinkStyled>
      </Container>
      <SearchBar />
    </Container>
  );
};

export default Navbar;
