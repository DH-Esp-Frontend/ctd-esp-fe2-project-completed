import styled from 'styled-components';

// componente general para hacer container. Display y flex direction por props

interface IConteiner {
  display: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  alignItems?: string;
  textAlign?: string;
}

const Container = styled.div<IConteiner>`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  text-align: ${(props) => props.textAlign || 'center'};
`;

export default Container;
