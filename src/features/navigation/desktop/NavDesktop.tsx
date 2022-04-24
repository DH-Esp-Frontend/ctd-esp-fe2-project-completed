import { Container, Logo } from 'features/styles';
import Nav from 'features/navigation/nav-container.styles';
import NavLinks from 'features/navigation/nav-link.styles';
import { SearchBar } from 'features/search';
import { FC } from 'react';

const NavDesktop: FC = () => (
  <Nav justifyContent="space-between">
    <Container width="400px">
      <NavLinks to="/">
        <Logo src={'/images/logo-dh.png'} alt={'Digital House'} />
      </NavLinks>
      <NavLinks to="/" active="active">
        <h3>Home</h3>
      </NavLinks>
      <NavLinks to="/following" active="active">
        <h3>Following</h3>
      </NavLinks>
    </Container>
    <SearchBar />
  </Nav>
);

export default NavDesktop;
