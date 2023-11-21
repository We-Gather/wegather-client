import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: 800;
  align-items: center;
`;

export const PageButton = styled.div<{ selected?: boolean }>`
  width: 1.625rem;
  height: 1.625rem;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 50%;
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? '#1ca526' : '')};
  margin: 0 0.7rem;
  padding-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevNextButton = styled.button`
  color: #585858;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
  margin: 0 0.7rem 0 0.7rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    color: #c9c9c9;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
