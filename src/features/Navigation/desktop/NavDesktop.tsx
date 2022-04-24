import SearchBar from 'features/search/SearchBar';
import { Container, Logo } from 'features/styles';
import Nav from 'features/navigation/nav-container.styles';
import NavLinks from 'features/navigation/nav-link.styles';

const NavDesktop = () => (
  <Nav justifyContent="space-between">
    <Container width="400px">
      <NavLinks to="/">
        <Logo src={'/images/logo-dh.png'} alt={'Digital House'} />
      </NavLinks>
      <NavLinks to="/about" active="active">
        <h3>About</h3>
      </NavLinks>
      <NavLinks to="/favs" active="active">
        <h3>Favorites</h3>
      </NavLinks>
    </Container>
    <SearchBar />
  </Nav>
);

export default NavDesktop;
