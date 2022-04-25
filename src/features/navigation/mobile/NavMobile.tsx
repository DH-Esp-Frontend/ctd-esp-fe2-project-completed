// import icon from '../../assets/logo-dh.png';
import MobileNav from 'features/navigation/mobile/mobile-nav.styles';
import NavLinks from 'features/navigation/nav-link.styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import useDisclosure from 'features/modal/useDisclosure';
import { SearchBar } from 'features/search';
import { Container, IconButton, Logo } from 'features/styles';
import { FC } from 'react';

const NavMobile: FC = () => {
  const { isOpen, toggle } = useDisclosure();

  return (
    <MobileNav active={isOpen}>
      <Container>
        <NavLinks to="/">
          <Logo src={'/images/logo-dh.png'} alt={'Digital House'} />
        </NavLinks>
        <IconButton aria-label="menu-button" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Container>
      {isOpen && (
        <Container flexDirection="column">
          <Container width="400px" flexDirection="column">
            <NavLinks to="/" active="active">
              <h3>Home</h3>
            </NavLinks>
            <NavLinks to="/following" active="active">
              <h3>Following</h3>
            </NavLinks>
          </Container>
          <SearchBar />
        </Container>
      )}
    </MobileNav>
  );
};
export default NavMobile;
