import SearchBar from '../Search/SearchBar';
// import icon from '../../assets/logo-dh.png';
import { Container, IconButton, Logo } from '../../styles';
import MobileNav from './mobile-nav.styles';
import NavLinks from './nav-link.styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import useDisclosure from './useDisclosure';

const NavMobile = () => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <MobileNav active={isOpen}>
      <Container>
        <NavLinks to="/">
          <Logo src={''} />
        </NavLinks>
        <IconButton onClick={onOpen}>{isOpen ? <FaTimes /> : <FaBars />}</IconButton>
      </Container>
      {isOpen && (
        <Container flexDirecction="column">
          <Container width="400px" flexDirecction="column">
            <NavLinks to="/about" active="active">
              <h3>About</h3>
            </NavLinks>
            <NavLinks to="/favs" active="active">
              <h3>Favorites</h3>
            </NavLinks>
          </Container>
          <SearchBar />
        </Container>
      )}
    </MobileNav>
  );
};
export default NavMobile;
