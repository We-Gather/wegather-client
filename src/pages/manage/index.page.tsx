import React, { useState } from 'react';

import Pagination from '@/components/Pagination';

import ClubInfo from './ClubInfo';
import {
  ClubCardWrapper,
  ClubListContentDiv,
  ClubListToolbarDiv,
  ContainerDiv,
  ContentContainerDiv,
  PaginationWrapper,
  SearchIcon,
  SearchInput,
  SortButton,
  SortByWrapper,
  TitleContainerDiv,
  TitleDescriptionDiv,
  TitleDiv
} from './style';

/**
 * 동아리 선택 페이지
 */
export default function Manage(): JSX.Element {
  const [page, setPage] = useState(1);
  const [sortByList] = useState([
    { label: '오름차순 (ㄱ ~ ㅎ)', value: '' },
    { label: '내림차순 (ㅎ ~ ㄱ)', value: '' },
    { label: '인기순', value: '' },
  ]);
  const [curSortBy, setCurSortBy] = useState(sortByList[0]);
  // 동아리 데이터 (임시)
  const clubList = [
    {
      name: 'Wegather',
      role: '동아리장',
      icon: '/tmp_image.png',
    },
    {
      name: '위게더',
      role: '동아리부장',
      icon: '/tmp_image.png',
    },
    {
      name: '위게더',
      role: '동아리부장',
      icon: '/tmp_image.png',
    },
  ];

  return (
    <ContainerDiv>
      {/* 상단 타이틀 */}
      <TitleContainerDiv>
        <TitleDiv>운영진으로 활동중인 동아리</TitleDiv>
        <TitleDescriptionDiv>
          카드 클릭 시 해당 동아리의 <span>관리 페이지</span>로 이동합니다.
        </TitleDescriptionDiv>
        <SearchInput>
          <input placeholder='검색' />
          <SearchIcon />
        </SearchInput>
      </TitleContainerDiv>

      <ContentContainerDiv>
        {/* 상단 툴바 (정렬) */}
        <ClubListToolbarDiv>
          <SortByWrapper>
            {sortByList.map((sortBy, i) => (
              <SortButton
                key={i}
                selected={sortBy.label == curSortBy.label}
                onClick={() => {
                  setCurSortBy(sortBy);
                }}>
                {sortBy.label}
              </SortButton>
            ))}
          </SortByWrapper>
        </ClubListToolbarDiv>
        {/* 동아리 선택 컴포넌트 */}
        <ClubListContentDiv>
          {/* 동아리 목록 조회 컴포넌트 */}
          <ClubCardWrapper>
            {clubList.map((club, i) => (
              <ClubInfo key={i} club={club} />
            ))}
          </ClubCardWrapper>
        </ClubListContentDiv>
        {/* 하단 페이지네이션 */}
        <PaginationWrapper>
          <Pagination totalPage={22} page={page} limit={10} setPage={setPage} />
        </PaginationWrapper>
      </ContentContainerDiv>
    </ContainerDiv>
  );
}
