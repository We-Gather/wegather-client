import React, { useState } from 'react';
import SchoolInfo from '@/components/SchoolInfo';
import Pagination from '@/components/Pagination';

import {
  ContainerDiv,
  TitleDiv,
  TitleDescriptionDiv,
  SchoolListHeaderDiv,
  SearchInput,
  DirectButton,
  SchoolListContentDiv,
  PaginationWrapper,
  SchoolListToolbarDiv,
  SortButton,
  BorderLine,
  SortByWrapper,
  SearchIcon,
  ButtonWrapper,
  SchoolListContent,
  SchoolCardWrapper,
} from './style';

/**
 * 학교 선택 페이지
 */
export default function SelectSchool(): JSX.Element {
  const [page, setPage] = useState(1);
  const [sortByList] = useState([
    { label: '오름차순 (ㄱ ~ ㅎ)', value: '' },
    { label: '내림차순 (ㅎ ~ ㄱ)', value: '' },
    { label: '인기순', value: '' },
  ]);
  const [curSortBy, setCurSortBy] = useState(sortByList[0]);
  // 로그인, 인증 여부 (임시)
  const isLogin = true;
  const isAuthenticated = true;
  // 학교 데이터 (임시)
  const schoolList = [
    {
      name: '한양대학교',
      campus: '서울',
      icon: 'https://s3-alpha-sig.figma.com/img/3b6d/def5/c72f2489a8779375f46e1fb9fd5c9eb1?Expires=1695600000&Signature=gv-Cfg2rHrJ8XRT8K-gBfXdeo6ojMdvyTS9fu6zldNBZDwg6ab3lLeaa3obChhhaRU-QLmaji1ZybjTf-ButH66akjQjdlFdF1cm7shCcrrQCln7jbQRaDeC7iReSxBIJe4nA78fomP7bPb4MKX-KZ2AjKRC-MK0F9z3Mc4~bd12qCmzC-dEIsei4s0smpBvPUgZJ3QMltU-XlLD9X3tvWi2KJJosj54hLDAOxLvRZ0nSOED~z5EmO25FFgst6zkcyGxyiF0Kch39LGEUI0iAJFCEuDcnuYLsQ9pUlJKPYVc2klxbgKMGdQF2ivz3g0uF9b6yejZWq4FDMOFwsKalg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: '한양대학교',
      campus: '서울',
      icon: 'https://s3-alpha-sig.figma.com/img/3b6d/def5/c72f2489a8779375f46e1fb9fd5c9eb1?Expires=1695600000&Signature=gv-Cfg2rHrJ8XRT8K-gBfXdeo6ojMdvyTS9fu6zldNBZDwg6ab3lLeaa3obChhhaRU-QLmaji1ZybjTf-ButH66akjQjdlFdF1cm7shCcrrQCln7jbQRaDeC7iReSxBIJe4nA78fomP7bPb4MKX-KZ2AjKRC-MK0F9z3Mc4~bd12qCmzC-dEIsei4s0smpBvPUgZJ3QMltU-XlLD9X3tvWi2KJJosj54hLDAOxLvRZ0nSOED~z5EmO25FFgst6zkcyGxyiF0Kch39LGEUI0iAJFCEuDcnuYLsQ9pUlJKPYVc2klxbgKMGdQF2ivz3g0uF9b6yejZWq4FDMOFwsKalg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: '한양대학교',
      campus: '서울',
      icon: 'https://s3-alpha-sig.figma.com/img/3b6d/def5/c72f2489a8779375f46e1fb9fd5c9eb1?Expires=1695600000&Signature=gv-Cfg2rHrJ8XRT8K-gBfXdeo6ojMdvyTS9fu6zldNBZDwg6ab3lLeaa3obChhhaRU-QLmaji1ZybjTf-ButH66akjQjdlFdF1cm7shCcrrQCln7jbQRaDeC7iReSxBIJe4nA78fomP7bPb4MKX-KZ2AjKRC-MK0F9z3Mc4~bd12qCmzC-dEIsei4s0smpBvPUgZJ3QMltU-XlLD9X3tvWi2KJJosj54hLDAOxLvRZ0nSOED~z5EmO25FFgst6zkcyGxyiF0Kch39LGEUI0iAJFCEuDcnuYLsQ9pUlJKPYVc2klxbgKMGdQF2ivz3g0uF9b6yejZWq4FDMOFwsKalg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  return (
    <ContainerDiv>
      {/* 상단 타이틀 */}
      <TitleDiv>
        <div>학교 선택</div>
        <TitleDescriptionDiv>
          카드 클릭 시 해당 학교의 <span>동아리 리스트</span>로 이동합니다.
        </TitleDescriptionDiv>
      </TitleDiv>

      <div>
        {/* 학교 선택 컴포넌트 상단 검색창 및 버튼 */}
        <SchoolListHeaderDiv>
          {isLogin && <h3>다른 학교 둘러보기</h3>}
          <SearchInput>
            <input placeholder="검색"></input>
            <SearchIcon />
          </SearchInput>
          {isLogin && (
            <ButtonWrapper>
              {!isAuthenticated && (
                <DirectButton>
                  <div>
                    <b>학교 인증</b> 바로가기
                  </div>
                </DirectButton>
              )}
              <DirectButton $colored="true">
                <div>
                  <b>내 동아리</b> 바로가기
                </div>
              </DirectButton>
            </ButtonWrapper>
          )}
        </SchoolListHeaderDiv>

        {/* 학교 선택 컴포넌트 */}
        <SchoolListContentDiv>
          {/* 정렬 관련 툴바 */}
          <SchoolListToolbarDiv>
            <span>정렬</span>
            <BorderLine />
            <SortByWrapper>
              {sortByList.map((sortBy, i) => (
                <SortButton
                  key={i}
                  selected={sortBy.label == curSortBy.label}
                  onClick={() => {
                    setCurSortBy(sortBy);
                  }}
                >
                  {sortBy.label}
                </SortButton>
              ))}
            </SortByWrapper>
          </SchoolListToolbarDiv>

          {/* 학교 목록 조회 컴포넌트 */}
          <SchoolListContent>
            <SchoolCardWrapper>
              {schoolList.map((school, i) => (
                <SchoolInfo
                  key={i}
                  school={school}
                  authenticationSchool={i == 0}
                />
              ))}
            </SchoolCardWrapper>
          </SchoolListContent>
        </SchoolListContentDiv>
      </div>

      {/* 하단 페이지네이션 */}
      <PaginationWrapper>
        <Pagination totalPage={22} page={page} limit={10} setPage={setPage} />
      </PaginationWrapper>
    </ContainerDiv>
  );
}
