import React from 'react';

import SortDropDown from '@/components/dropdown/SortDropDown';
import { clubRecruitCard } from '@/types/clubRecruitCard';

import ClubRecruitCard from '../ClubRecruitCard';
import {
  InputWrapper,
  MainContainer,
  RecruitCardContainer,
  RecruitCardWrapper,
  RecruitSearchInput,
  SearchButton,
  SearchIcon,
  SearchSortContainer
} from './style';

/*
	테스트용 카드 (모집공고)
*/
const mockRecruitCard: clubRecruitCard = {
  title: 'UX/UI 디자이너 모집',
  description:
    '위게더 22기 디자이너를 모집합니다! 웹사이트 메인페이지 디자인을 담당하게 될 예정입니다. 성실하게 참여하실 분 이라면 누구든 환영합니다. (최대 2줄)',
  startDate: '2023-06-29',
  endDate: '2023-06-29',
  applicantCount: 10,
};
const mockCardList: Array<clubRecruitCard> = [
  mockRecruitCard,
  mockRecruitCard,
  mockRecruitCard,
  mockRecruitCard,
];

const dropDownList = ['최신순', '즐겨찾기순', '마감일순'];

export default function ClubInfoRecruitCardList() {
  return (
    <MainContainer>
      <SearchSortContainer>
        <InputWrapper>
          <RecruitSearchInput placeholder='공고명 검색' />
          <SearchButton>
            <SearchIcon size='31' />
          </SearchButton>
        </InputWrapper>
        <SortDropDown list={dropDownList} />
      </SearchSortContainer>
      <RecruitCardContainer>
        {mockCardList.map((recruitInfo, index) => (
          <RecruitCardWrapper key={index}>
            <ClubRecruitCard recruitInfo={recruitInfo} />
          </RecruitCardWrapper>
        ))}
      </RecruitCardContainer>
    </MainContainer>
  );
}
