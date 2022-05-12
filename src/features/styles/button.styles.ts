import styled from 'styled-components';

export interface ButtonProps {
  variant?: 'primary' | 'danger';
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border-radius: 5px;
  background-color: ${({ variant }) => (variant === 'primary' ? 'rgb(10, 77, 157)' : '#8d2020')};
  color: white;
  &:disabled {
    cursor: inherit;
    background-color: rgb(128, 134, 140);
  }
`;

export default Button;
