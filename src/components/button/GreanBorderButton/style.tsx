import styled from 'styled-components';

export const StyledButton = styled.button<{
  backgroundColor?: string;
  textColor?: string;
}>`
  width: 5.625rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #36bf7f;
  background: ${props => props.backgroundColor || '#36BF7F'};
  color: ${props => props.textColor || '#36BF7F'};
`;
