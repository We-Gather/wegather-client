import styled from 'styled-components';

export const CheckBoxDiv = styled.div`
  width: 0.9375rem;
  height: 0.9375rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid #585858;
  background: #fff;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  & div {
    color: #36bf7f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
