import { QuestionMarkCircleOutline } from '@styled-icons/evaicons-outline/QuestionMarkCircleOutline';
import { ArrowIosForward } from '@styled-icons/evaicons-solid/ArrowIosForward';
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

export const PopupContent = styled.div`
  width: 35.625rem;
  height: 7.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;
  > button {
    border-radius: 3.125rem;
    border: 1px solid #1ca526;
    background: #1ca526;
    color: #fff;
    text-align: center;
    font-size: 0.6875rem;
    font-weight: 500;
    padding: 0.3rem 0.9rem;
    cursor: pointer;
  }
`;

export const CategoryInputWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  > input {
    width: 8rem;
    height: 1.5rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    border: 1px solid #000;
  }
`;

export const Seperator = styled(ArrowIosForward)`
  color: #c9c9c9;
`;

export const TooltipIcon = styled(QuestionMarkCircleOutline)`
  color: #1ca526;
  padding-bottom: 0.1rem;
`;

export const PopupTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.2rem;
`;
