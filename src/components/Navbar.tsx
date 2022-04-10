/* eslint-disable arrow-body-style */

import { Container, IconButton, LinkStyled, Logo, MobileNav, Nav, NavLinks } from 'styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import icon from '../assets/logo-dh.png';
import SearchBar from './SearchBar';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Nav justifyContent="space-between">
        <NavLinks width="400px">
          <LinkStyled to="/">
            <Logo src={icon} />
          </LinkStyled>
          <LinkStyled to="/about" active="active">
            <h3>About</h3>
          </LinkStyled>
          <LinkStyled to="/favs" active="active">
            <h3>Favorites</h3>
          </LinkStyled>
        </NavLinks>
        <SearchBar />
      </Nav>
      {/* Mobile Nav */}
      <MobileNav active={toggle}>
        <Container>
          <LinkStyled to="/">
            <Logo src={icon} />
          </LinkStyled>
          <IconButton onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
          </IconButton>
        </Container>
        {toggle && (
          <Container flexDirecction="column">
            <NavLinks width="400px" flexDirecction="column">
              <LinkStyled to="/about" active="active">
                <h3>About</h3>
              </LinkStyled>
              <LinkStyled to="/favs" active="active">
                <h3>Favorites</h3>
              </LinkStyled>
            </NavLinks>
            <SearchBar />
          </Container>
        )}
      </MobileNav>
    </Container>
  );
};

export default Navbar;
