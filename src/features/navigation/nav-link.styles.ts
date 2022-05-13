import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface INavLink {
  active?: string;
}

const NavLinks = styled(NavLink)<INavLink>`
  text-decoration: none;
  color: #333333;
  transition: all 0.6s ease;
  &.${(props) => props.active} {
    color: #0a4d9d;
  }
`;

export default NavLinks;
