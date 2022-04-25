import styled from 'styled-components';
import { Container } from 'features/styles';

const MobileNav = styled(Container)`
  flex-direction: ${(props) => props.active && 'column'};
  @media (min-width: 1000px) {
    display: none;
  }
`;

export default MobileNav;
