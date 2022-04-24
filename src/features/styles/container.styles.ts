import styled from 'styled-components';

// componente general para hacer container. Recibe estilos por props

export interface IContainer {
  display?: string;
  justifyContent?: string;
  flexDirection?: string;
  width?: string;
  alignItems?: string;
  textAlign?: string;
  active?: boolean;
}

const Container = styled.div<IContainer>`
  width: ${(props) => props.width || '100%'};
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justifyContent || 'space-around'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  text-align: ${(props) => props.textAlign || 'center'};
`;

export default Container;
