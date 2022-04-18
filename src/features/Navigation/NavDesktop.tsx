import SearchBar from 'features/Search/SearchBar';
import icon from '../../assets/logo-dh.png';
import { Container, Logo } from 'styles';
import Nav from './nav-container.styles';
import NavLinks from './nav-link.styles';

const NavDesktop = () => (
  <Nav justifyContent="space-between">
    <Container width="400px">
      <NavLinks to="/">
        <Logo src={icon} />
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
