import styled from 'styled-components';

const Table = styled.table`
  font-size: 0.9rem;
  width: 100%;
  color: #212529;
  vertical-align: top;
  border-color: #e0e0e0;
  border-spacing: 0;
  border-collapse: collapse;
  & tbody > tr {
    cursor: pointer;
  }
  & tr:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
  & th {
    font-weight: bold;
  }
  & th,
  & td {
    border: 0 solid;
    border-bottom-width: 1px;
    border-color: inherit;
    padding: 0.5rem 1.4rem;
  }
  & tr:nth-of-type(odd) > * {
    background-color: rgba(0, 0, 0, 0.03);
    color: #212529;
  }
`;

export default Table;
