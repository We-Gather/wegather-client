import styled from 'styled-components';

export const StyledButton = styled.button<{
  backgroundColor?: string;
  textColor?: string;
}>`
  flex-shrink: 0;
  display: inline-block;
  height: 1.5625rem;
  padding: 0.19rem 0.63rem;
  border-radius: 0.3125rem;
  box-sizing: border-box;
  border: 1px solid #1ca526;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  cursor: pointer;
  background: ${props => props.backgroundColor || '#fff;'};
  color: ${props => props.textColor || '#1ca526'};
`;
