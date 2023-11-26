import 'dayjs/locale/ko';

import { Person } from '@styled-icons/bootstrap/Person';
import { Clock } from '@styled-icons/evil/Clock';
import dayjs from 'dayjs';
import { useState } from 'react';
import React from 'react';

import { clubRecruitCard } from '@/types/clubRecruitCard';

import {
  ClubApplicantCount,
  ClubDeadline,
  ClubDeadlineCounter,
  ClubDescription,
  ClubDescriptionContainer,
  ClubNameDateContainer,
  ClubRecruitName,
  ClubRecuitContainer,
  ClubSubmitButton,
  EmptyStar,
  FilledStar,
  MainContainer,
  PreviewWrapper,
  StarButton,
  SubmitButtonWrapper,
  ToggleButton
} from './style';
dayjs.locale('ko');

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
        <StarButton onClick={handleClick}>
          {!isStartClicked ? <EmptyStar /> : <FilledStar />}
        </StarButton>
        <ClubNameDateContainer>
          <ClubDeadlineCounter>
            D - {daysRemaining > 0 ? daysRemaining : 0}
          </ClubDeadlineCounter>
          <ClubRecruitName>{recruitInfo.title}</ClubRecruitName>
          <ClubApplicantCount>
            <Person size='13' />
            지원자 : <span>{recruitInfo.applicantCount}</span>명
          </ClubApplicantCount>
        </ClubNameDateContainer>
        <ClubDescriptionContainer>
          <ClubDescription>{recruitInfo.description}</ClubDescription>
          <ClubDeadline>
            <Clock size='17' />
            <div>
              모집기간 :{' '}
              <span>{dayjs(recruitInfo.startDate).format('YYYY')}</span>년{' '}
              <span>{dayjs(recruitInfo.startDate).format('M')}</span>월{' '}
              <span>{dayjs(recruitInfo.startDate).format('D')}</span>일{' '}
              {dayjs(recruitInfo.startDate).format('(ddd)')} ~{' '}
              <span>{dayjs(recruitInfo.endDate).format('YYYY')}</span>년{' '}
              <span>{dayjs(recruitInfo.endDate).format('M')}</span>월{' '}
              <span>{dayjs(recruitInfo.endDate).format('D')}</span>일{' '}
              {dayjs(recruitInfo.endDate).format('(ddd)')}
            </div>
          </ClubDeadline>
        </ClubDescriptionContainer>
        <SubmitButtonWrapper>
          <ClubSubmitButton>지원하기</ClubSubmitButton>
        </SubmitButtonWrapper>
      </ClubRecuitContainer>
      <PreviewWrapper $visible={visible}>
        <ToggleButton onClick={() => seVisible(!visible)}>
          미리보기
        </ToggleButton>
      </PreviewWrapper>
    </MainContainer>
  );
}
