import styled from 'styled-components';

const SearchBox = styled.form`
  display: flex;
  justify-content: space-around;
  height: fit-content;
  width: 30%;
  border-radius: 0.5rem;
  margin-right: 5%;
  padding: 0 1rem;
  border: 1px solid grey;
  transition: all 0.8s ease;
  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1000px) {
    margin-right: 0;
    font-size: 0.2rem;
    width: 70%;
  }
`;

export default SearchBox;
