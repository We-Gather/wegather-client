import { Check } from '@styled-icons/boxicons-regular/Check';
import { CloseOutline as Close } from '@styled-icons/evaicons-outline/CloseOutline';
import { Play } from '@styled-icons/fa-solid/Play';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.69rem;
  flex-direction: column;
  width: 66.875rem;
`;

export const ClubMainContainer = styled.div`
  width: 66.875rem;
  height: 18.75rem;
  flex-shrink: 0;
  border-radius: 0.8125rem;
  border: 1px solid #585858;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 2.8rem;
  padding: 1rem 3.69rem;
  box-sizing: border-box;
`;

export const ClubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClubTitleDiv = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.045rem;
`;

export const ImageWrapper = styled(Image)`
  width: 9.5rem;
  height: 9.5rem;
  flex-shrink: 0;
  border-radius: 50%;
`;

export const ClubInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0.5rem;
`;

export const ValueWrapper = styled.div`
  display: flex;
  gap: 1rem;
  > label {
    font-weight: 400;
    width: 2rem;
    padding: 0.4rem;
  }
  > div {
    width: 40rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    row-gap: 0.5rem;
    > div {
      display: flex;
      height: 1.625rem;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      gap: 0.38rem;
      padding: 0.19rem 0.94rem;
      border-radius: 0.3125rem;
      border: 1px solid #9c9c9c;
      background: #fff;
    }
  }
`;

export const CheckIcon = styled(Check)`
  color: #1ca526;
  padding-bottom: 0.3rem;
`;

export const CrossIcon = styled(Close)`
  color: #585858;
  padding-bottom: 0.1rem;
`;

export const ClubInfoContainer = styled.div`
  width: 66.875rem;
  height: 49rem;
  flex-shrink: 0;
  border-radius: 0.8125rem;
  border: 1px solid #585858;
  background: #fff;
  padding: 2.63rem 5.32rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 3.62rem;
`;

export const InfoTitleDiv = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 0.5rem 0;
  border-bottom: 1px solid #d9d9d9;
`;

export const InfoContentDiv = styled.div`
  margin-top: 1.44rem;
  display: inline-block;
  > div {
    cursor: pointer;
    display: flex;
    padding: 0.25rem 1.5rem;
    align-items: center;
    gap: 0.5rem;
    color: #1ca526;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 1.25rem;
    border: 1px solid #1ca526;
    background: #fff;
    line-height: 200%;
    margin-top: 1.06rem;
  }
  > :first-child {
    margin-top: 0;
  }
`;

export const GoIcon = styled(Play)`
  color: #1ca526;
  width: 0.8rem;
  height: 0.8rem;
`;
