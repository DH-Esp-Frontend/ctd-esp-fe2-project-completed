import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface INavLink {
  active?: string;
}

const NavLinks = styled(NavLink)<INavLink>`
  text-decoration: none;
  color: #333333;
  transition: all 0.8s ease;
  &.${(props) => props.active} {
    color: #8a8a8a;
  }
  &:hover {
    color: #8a8a8a;
  }
`;

export default NavLinks;
