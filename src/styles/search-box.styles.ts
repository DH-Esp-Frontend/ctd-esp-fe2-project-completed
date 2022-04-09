import styled from 'styled-components';
import Container from './container.styles';

const SearchBox = styled(Container)`
  margin-right: 30px;
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 1px solid grey;
  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default SearchBox;
