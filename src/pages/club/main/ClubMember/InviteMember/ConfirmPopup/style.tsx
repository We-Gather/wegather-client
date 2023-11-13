import { styled } from 'styled-components';

export const PopupContent = styled.div`
  padding: 1.37rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.37rem;
  color: #000;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0625rem;
  word-break: keep-all;
  & span {
    font-weight: 700;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.87rem;
`;

const Button = styled.div`
  border-radius: 3.125rem;
  padding: 0.25rem 1.13rem;
  border: 1px solid #36bf7f;
  text-align: center;
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ConfirmButton = styled(Button)`
  color: #fff;
  background: #36bf7f;
`;

export const CancelButton = styled(Button)`
  color: #36bf7f;
  background: #fff;
`;
