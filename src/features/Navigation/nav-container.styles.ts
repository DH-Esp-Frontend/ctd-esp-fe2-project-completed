import styled from 'styled-components';
import { Container } from '../styles';

const Nav = styled(Container)`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default Nav;
