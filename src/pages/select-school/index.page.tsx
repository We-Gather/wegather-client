import React, { useState } from 'react';
import SchoolInfo from '@/components/schoolInfo';
import Pagination from '@/components/pagination';

import {
  ContainerDiv,
  TitleDiv,
  TitleDescriptionDiv,
  TitleContainerDiv,
  SearchInput,
  DirectButton,
  SchoolListContentDiv,
  ContentContainerDiv,
  PaginationWrapper,
  SchoolListToolbarDiv,
  SortButton,
  SortByWrapper,
  SearchIcon,
  ButtonWrapper,
  SchoolCardWrapper,
  CheckWrapper,
} from './style';
import Checkbox from '@/components/checkbox';

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
      campus: 'ERICA 캠퍼스',
      icon: 'https://s3-alpha-sig.figma.com/img/3b6d/def5/c72f2489a8779375f46e1fb9fd5c9eb1?Expires=1698624000&Signature=Lfmpj9kmAYq9gXM6hdurypt6nlhjQgCw7mW6f4WYvs1JXy44GFZ5aQIiiA6VEdzBegfAkYV5s5fT0iQ7~NpOc0BI0w~NikgOtcNgwcTbceSVVS9RJGSdcEV2OOtZrswJtSxov54aySD~00qP31CtG10LJGVCdrm-ovWnEjYqx4oSLdht4C77Qx1yolXH79J6mjTs0XwihZHgzM7pFfar01zlNi9nwJMJJFGLG5uUa0Lr95zjVyCMB7NJoyFqrEq1JAh22Vr5DRoF0zh32nVrwFjcLrzPbZ6f~R2WXIo1CURMQfOpyDlbZgPCMLVj23qsXu88toZElwNa7ga9LKgnnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: '한양대학교',
      campus: 'ERICA 캠퍼스',
      icon: 'https://s3-alpha-sig.figma.com/img/3b6d/def5/c72f2489a8779375f46e1fb9fd5c9eb1?Expires=1698624000&Signature=Lfmpj9kmAYq9gXM6hdurypt6nlhjQgCw7mW6f4WYvs1JXy44GFZ5aQIiiA6VEdzBegfAkYV5s5fT0iQ7~NpOc0BI0w~NikgOtcNgwcTbceSVVS9RJGSdcEV2OOtZrswJtSxov54aySD~00qP31CtG10LJGVCdrm-ovWnEjYqx4oSLdht4C77Qx1yolXH79J6mjTs0XwihZHgzM7pFfar01zlNi9nwJMJJFGLG5uUa0Lr95zjVyCMB7NJoyFqrEq1JAh22Vr5DRoF0zh32nVrwFjcLrzPbZ6f~R2WXIo1CURMQfOpyDlbZgPCMLVj23qsXu88toZElwNa7ga9LKgnnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: '한양대학교',
      campus: 'ERICA 캠퍼스',
      icon: 'https://s3-alpha-sig.figma.com/img/3b6d/def5/c72f2489a8779375f46e1fb9fd5c9eb1?Expires=1698624000&Signature=Lfmpj9kmAYq9gXM6hdurypt6nlhjQgCw7mW6f4WYvs1JXy44GFZ5aQIiiA6VEdzBegfAkYV5s5fT0iQ7~NpOc0BI0w~NikgOtcNgwcTbceSVVS9RJGSdcEV2OOtZrswJtSxov54aySD~00qP31CtG10LJGVCdrm-ovWnEjYqx4oSLdht4C77Qx1yolXH79J6mjTs0XwihZHgzM7pFfar01zlNi9nwJMJJFGLG5uUa0Lr95zjVyCMB7NJoyFqrEq1JAh22Vr5DRoF0zh32nVrwFjcLrzPbZ6f~R2WXIo1CURMQfOpyDlbZgPCMLVj23qsXu88toZElwNa7ga9LKgnnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  const [checked, setChecked] = useState(false);

  return (
    <ContainerDiv>
      {/* 상단 타이틀 */}
      <TitleContainerDiv>
        <TitleDiv>학교 선택</TitleDiv>
        <TitleDescriptionDiv>
          카드 클릭 시 해당 학교의 <span>동아리 리스트</span>로 이동합니다.
        </TitleDescriptionDiv>
        <SearchInput>
          <input placeholder="검색"></input>
          <SearchIcon />
        </SearchInput>
        {isLogin && (
          <ButtonWrapper>
            <DirectButton $colored="true">
              <div>
                <b>내 동아리</b> 바로가기
              </div>
            </DirectButton>
            {!isAuthenticated && (
              <DirectButton>
                <div>
                  <b>학교 인증</b> 바로가기
                </div>
              </DirectButton>
            )}
          </ButtonWrapper>
        )}
      </TitleContainerDiv>

      <ContentContainerDiv>
        {/* 상단 툴바 (정렬, 내 학교로 시작 체크박스) */}
        <SchoolListToolbarDiv>
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
          {isAuthenticated && (
            <CheckWrapper>
              <Checkbox
                checked={checked}
                onClickHandler={() => {
                  setChecked((prev) => !prev);
                }}
              />
              <div
                onClick={() => {
                  setChecked((prev) => !prev);
                }}
              >
                항상 <span>내 학교</span>로 시작
              </div>
            </CheckWrapper>
          )}
        </SchoolListToolbarDiv>
        {/* 학교 선택 컴포넌트 */}
        <SchoolListContentDiv>
          {/* 학교 목록 조회 컴포넌트 */}
          <SchoolCardWrapper>
            {schoolList.map((school, i) => (
              <SchoolInfo
                key={i}
                school={school}
                authenticationSchool={i == 0}
              />
            ))}
          </SchoolCardWrapper>
        </SchoolListContentDiv>
        {/* 하단 페이지네이션 */}
        <PaginationWrapper>
          <Pagination totalPage={22} page={page} limit={10} setPage={setPage} />
        </PaginationWrapper>
      </ContentContainerDiv>
    </ContainerDiv>
  );
}
