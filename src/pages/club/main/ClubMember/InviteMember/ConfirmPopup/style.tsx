import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 14.375rem;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 0.3125rem;
`;

export const PopupHeader = styled.div`
  border-bottom: 1px solid #d9d9d9;
  padding: 0.3rem 0;
  box-sizing: border-box;
  & div {
    padding: 0 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9c9c9c;
    font-size: 0.875rem;
    font-weight: 700;
  }
`;

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
