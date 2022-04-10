import styled from 'styled-components';

// componente general para hacer container. Recibe estilos por props

export interface IConteiner {
  display?: string;
  justifyContent?: string;
  flexDirecction?: string;
  width?: string;
  alignItems?: string;
  textAlign?: string;
  active?: boolean;
}

const Container = styled.div<IConteiner>`
  width: ${(props) => props.width || '100vw'};
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justifyContent || 'space-around'};
  flex-direction: ${(props) => props.flexDirecction || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  text-align: ${(props) => props.textAlign || 'center'};
`;

export default Container;
