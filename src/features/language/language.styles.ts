import styled from 'styled-components';

const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`;

export const LanguageButton = styled.button`
  background-color: white;
  padding: 4px 2px;
  margin-right: 10px;

  &.active {
    color: white;
    background-color: #17589f;
  }
`;

export default LanguageWrapper;
