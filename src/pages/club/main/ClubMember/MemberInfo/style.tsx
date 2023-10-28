import styled from 'styled-components';

export const CountInfo = styled.div`
  color: #585858;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
  cursor: pointer;
  margin-bottom: 0.38rem;
  width: 5rem;
  & span {
    font-weight: 800;
  }
`;

export const NumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #d9d9d9;
  flex-shrink: 0;
  border-radius: 50%;
  color: #585858;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
`;
