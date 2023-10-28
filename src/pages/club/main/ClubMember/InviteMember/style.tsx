import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  margin-top: 0.63rem;
  margin-left: 35%;
  & div {
    display: flex;
    gap: 0.7rem;
  }
`;

export const TableButton = styled.button<{ $addButton?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  height: 1.5625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid ${(props) => (props.$addButton ? '#585858' : '#9c9c9c')};
  background: #fff;
  color: ${(props) => (props.$addButton ? '#000' : '#585858')};
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
  padding: 0.12rem 1.3rem;
  cursor: pointer;
`;

export const BatchInviteButton = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 0.75rem;
  padding: 0.25rem 0.5625rem;
  border-radius: 3.125rem;
  border: 1px solid #585858;
  background: #fff;
  color: #000;
  font-weight: 400;
  letter-spacing: 0.0625rem;
  margin-bottom: 0.38rem;
  width: 4.25rem;
`;
