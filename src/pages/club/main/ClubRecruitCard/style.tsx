import styled from 'styled-components';
import { Star as EmptyStarIcon } from '@styled-icons/evil/Star';
import { StarRate as FilledStarIcon } from '@styled-icons/material-sharp/StarRate';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ClubRecuitContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #c9c9c9;
  background: #fff;
  position: relative;
`;

export const ClubNameDateContainer = styled.div`
  display: flex;
  width: 17.5rem;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3.6rem;
  gap: 0.5rem;
  box-sizing: border-box;
  border-right: 0.0625rem solid #d9d9d9;
`;

export const ClubDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35rem;
  padding: 0 1.75rem;
  gap: 0.3rem;
`;

export const ClubDescription = styled.div`
  color: #585858;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4375rem;
  letter-spacing: -0.02625rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: start;
`;

export const ClubDeadline = styled.div`
  color: #585858;
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.02063rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  & span {
    color: #3574f2;
  }
`;
export const ClubSubmitButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: -0.02625rem;
  border-radius: 1.9375rem;
  border: 1px solid #1ca526;
  background: #1ca526;
  width: 6.25rem;
  height: 1.91325rem;
  flex-shrink: 0;
  cursor: pointer;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
  align-self: start;
  padding: 1rem 2rem;
`;

export const ClubDeadlineCounter = styled.div`
  flex-shrink: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 1.875rem;
  background: #c4c4c4;
  color: #fff;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.02063rem;
  padding: 0.1rem 0.5rem;
`;
export const ClubRecruitName = styled.div`
  color: #000;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.03375rem;
`;
export const ClubApplicantCount = styled.div`
  color: #585858;
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: -0.02063rem;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  span {
    color: #3574f2;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: -0.02063rem;
  }
`;

export const ToggleButton = styled.button`
  height: 1.5rem;
  border: none;
  border-radius: 0 0 10px 10px;
  color: #000;
  background: none;
  cursor: pointer;
`;
export const DeadLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StarButton = styled.button`
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0.5rem;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  color: #fff;
`;
export const EmptyStar = styled(EmptyStarIcon)`
  width: 1.625rem;
  height: 1.625rem;
  color: #9c9c9c;
  background-color: #fff;
  cursor: pointer;
`;
export const FilledStar = styled(FilledStarIcon)`
  width: 1.625rem;
  height: 1.625rem;
  color: #fbbc05;
  background-color: #fff;
  cursor: pointer;
`;
interface StyledPreviewProps {
  $visible: boolean;
}
export const activeExist = ({ $visible = true }: StyledPreviewProps) => {
  return `height: ${$visible ? '19rem' : '1.5rem'}`;
};

export const PreviewWrapper = styled.div<StyledPreviewProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #c9c9c9;
  ${activeExist};
  color: #000;
  transition: height 0.3s ease-in-out;
  border-bottom-left-radius: 0.8125rem;
  border-bottom-right-radius: 0.8125rem;
`;
