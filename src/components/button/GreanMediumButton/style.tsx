import styled from 'styled-components';

export const StyledButton = styled.button<{
  background?: string;
  textcolor?: string;
}>`
  width: 5.625rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #36bf7f;
  background: ${props => props.background || '#36BF7F'};
  color: ${props => props.textcolor || '#36BF7F'};
`;
