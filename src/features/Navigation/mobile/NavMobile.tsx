// import icon from '../../assets/logo-dh.png';
import MobileNav from 'features/navigation/mobile/mobile-nav.styles';
import NavLinks from 'features/navigation/nav-link.styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import useDisclosure from 'features/modal/useDisclosure';
import { SearchBar } from 'features/search';
import { Container, IconButton, Logo } from 'features/styles';

const NavMobile = () => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <MobileNav active={isOpen}>
      <Container>
        <NavLinks to="/">
          <Logo src={'/images/logo-dh.png'} />
        </NavLinks>
        <IconButton onClick={onOpen}>{isOpen ? <FaTimes /> : <FaBars />}</IconButton>
      </Container>
      {isOpen && (
        <Container flexDirection="column">
          <Container width="400px" flexDirection="column">
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
