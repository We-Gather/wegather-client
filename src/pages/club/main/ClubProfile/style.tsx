import Image from 'next/image';
import styled from 'styled-components';

export const ClubMainContainer = styled.div`
  width: 71.875rem;
  height: 18.75rem;
  flex-shrink: 0;
  border-radius: 0.8125rem;
  border: 1px solid #585858;
  background: #fff;
  display: flex;
`;
export const ClubInfoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 2.8rem;
  padding: 1rem 3.69rem;
`;
export const ClubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClubTitle = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.045rem;
`;
export const ClubDescription = styled.div`
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.02625rem;
`;

export const ClubTagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.37rem;
`;
export const HorizonLine = styled.div`
  width: 67.5rem;
  border-bottom: 1px solid #aaa;
  line-height: 0.1rem;
`;
export const HashBlack = styled.p`
  color: #c9c9c9;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const IconRowContainer = styled.div`
  display: flex;
  min-width: 15rem;
  justify-content: flex-end;
  padding: 1.61rem 2rem;
  align-self: flex-start;
  gap: 0.68rem;
  > span {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
    color: #585858;
    text-align: center;
    font-size: 0.74694rem;
    font-weight: 500;
    letter-spacing: -0.02244rem;
  }
  & div {
    border: 0.854px solid #9c9c9c;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const ImageWrapper = styled(Image)`
  width: 9.5rem;
  height: 9.5rem;
  flex-shrink: 0;
  border-radius: 50%;
`;
