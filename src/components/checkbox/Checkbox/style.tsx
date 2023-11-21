import styled from 'styled-components';

export const CheckBoxDiv = styled.div<{ $checked: boolean }>`
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
  border-radius: 0.15rem;
  border: 0.72px solid ${props => (props.$checked ? '#1ca526' : '#585858')};
  background: #fff;
  color: #fff;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  & div {
    background-color: #1ca526;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
