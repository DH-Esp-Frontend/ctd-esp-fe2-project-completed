/* eslint-disable arrow-body-style */

import { Link } from 'react-router-dom';
import { Logo, Nav, SearchInput } from 'styles';
import icon from '../assets/logo-dh.png';

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={icon} />
      </Link>
      <SearchInput placeholder="Search.." />
    </Nav>
  );
};

export default Navbar;
