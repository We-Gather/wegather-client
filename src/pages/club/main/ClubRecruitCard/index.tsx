import { clubRecruitCard } from '@/types/clubRecruitCard';
import { useState } from 'react';
import React from 'react';
import {
  MainContainer,
  ClubRecuitContainer,
  ClubNameDateContainer,
  DeadLineWrapper,
  StarButton,
  EmptyStar,
  FilledStar,
  ClubDeadlineCounter,
  ClubRecruitName,
  ClubApplicantCount,
  VerticalLine,
  ClubDescriptionContainer,
  ClubDescription,
  ClubDeadline,
  ClubSubmitButton,
  ToggleButton,
  PreviewWrapper,
} from './style';

interface Props {
  recruitInfo: clubRecruitCard;
}
/*
 * 미리보기 토글 내부는 미구현
 */
export default function ClubRecruitCard({ recruitInfo }: Props) {
  const [visible, seVisible] = useState(false);
  const [isStartClicked, setStarClicked] = useState(false);

  const handleClick = () => {
    setStarClicked(!isStartClicked);
  };
  const endDate: Date = new Date(recruitInfo.endDate);
  const today: Date = new Date();
  const timeDifference: number = endDate.getTime() - today.getTime();
  const daysRemaining: number = Math.ceil(
    timeDifference / (1000 * 60 * 60 * 24)
  );

  return (
    <MainContainer>
      <ClubRecuitContainer>
        <ClubNameDateContainer>
          <DeadLineWrapper>
            <StarButton onClick={handleClick}>
              {!isStartClicked ? <EmptyStar /> : <FilledStar />}
            </StarButton>
            <ClubDeadlineCounter>
              Day-{daysRemaining > 0 ? daysRemaining : 0}
            </ClubDeadlineCounter>
          </DeadLineWrapper>
          <ClubRecruitName>{recruitInfo.title}</ClubRecruitName>
          <ClubApplicantCount>
            지원자 : <span>{recruitInfo.applicantCount}</span>명
          </ClubApplicantCount>
        </ClubNameDateContainer>
        <VerticalLine />
        <ClubDescriptionContainer>
          <ClubDescription>{recruitInfo.description}</ClubDescription>
          <ClubDeadline>
            {recruitInfo.startDate} ~ {recruitInfo.endDate}
          </ClubDeadline>
        </ClubDescriptionContainer>
        <ClubSubmitButton>지원하기</ClubSubmitButton>
      </ClubRecuitContainer>

      <PreviewWrapper $visible={visible}>
        <ToggleButton onClick={() => seVisible(!visible)}>
          미리보기
        </ToggleButton>
      </PreviewWrapper>
    </MainContainer>
  );
}
