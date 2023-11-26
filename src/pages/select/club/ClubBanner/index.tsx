import React, { useEffect, useMemo, useState } from 'react';

import {
  CategoryDiv,
  CategoryListDiv,
  ClubDiscriptionDiv,
  ClubDiv,
  ClubImage,
  ClubInfoDiv,
  ClubListDiv,
  ClubTitleDiv,
  ContainerDiv,
  ContentDiv,
  EmptyStar,
  FilledStar,
  LeftIcon,
  PageDot,
  PageDotList,
  RightIcon,
  StarButton
} from './style';

function ClubBanner() {
  const PAGE_SIZE = 3;
  const [curPage, setCurPage] = useState(0); // 현재 페이지
  const [pageCount, setPageCount] = useState(0); // 페이지 개수
  const [isStartClicked, setStarClicked] = useState(false); // 별 클릭 여부
  const [curCategoryIdx, setCurCategoryIdx] = useState(0); // 선택된 카테고리
  const categories = [
    { label: '인기있는', value: '1' },
    { label: '인원많은', value: '2' },
    { label: '모집중인', value: '1' },
  ]; // 카테고리 목록

  // 임시 데이터
  const club1 = useMemo(
    () => ({
      name: '댄스 동아리1',
      discription:
        '댄스동아리 설명 댄스동아리 설명 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스동아리 설명 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리',
      memberCount: 32,
      applicantCount: 32,
      announceCount: 3,
    }),
    []
  );
  const club2 = useMemo(
    () => ({
      name: '댄스 동아리2',
      discription:
        '댄스동아리 설명 댄스동아리 설명 댄스동아리 설명 댄스 동아리',
      memberCount: 32,
      applicantCount: 32,
      announceCount: 3,
    }),
    []
  );
  const clubList = useMemo(
    () => [club1, club2, club2, club2, club1, club2, club1, club1],
    [club1, club2]
  );

  useEffect(() => {
    setPageCount(Math.ceil(clubList.length / PAGE_SIZE));
  }, [clubList]);

  return (
    <ContainerDiv>
      <CategoryListDiv>
        {categories.map((cat, i) => (
          <CategoryDiv
            key={i}
            $selected={curCategoryIdx === i}
            onClick={() => {
              setCurCategoryIdx(i);
            }}>
            {cat.label}
          </CategoryDiv>
        ))}
      </CategoryListDiv>
      <ContentDiv>
        <ClubListDiv>
          <LeftIcon
            size='28'
            onClick={() => {
              if (curPage <= 0) return;
              setCurPage(prev => prev - 1);
            }}
          />
          {Array.from({ length: PAGE_SIZE }, (_, index) => {
            const i = curPage * PAGE_SIZE + index;
            return (
              i < clubList.length && ( // Check if the index is within the bounds of clubList
                <ClubDiv key={i}>
                  <ClubTitleDiv>
                    <ClubImage $url='/tmp' />
                    <div>{clubList[i].name}</div>
                  </ClubTitleDiv>
                  <ClubDiscriptionDiv>
                    <div>{clubList[i].discription}</div>
                  </ClubDiscriptionDiv>
                  <ClubInfoDiv>
                    동아리원 {clubList[i].memberCount}명 / 지원자수{' '}
                    {clubList[i].applicantCount}명 <br />
                    모집중인 공고 {clubList[i].announceCount}개
                  </ClubInfoDiv>
                  <StarButton
                    onClick={() => {
                      setStarClicked(prev => !prev);
                    }}>
                    {!isStartClicked ? <EmptyStar /> : <FilledStar />}
                  </StarButton>
                </ClubDiv>
              )
            );
          })}
          <RightIcon
            size='28'
            onClick={() => {
              if (curPage >= pageCount - 1) return;
              setCurPage(prev => prev + 1);
            }}
          />
        </ClubListDiv>
        <PageDotList>
          {Array.from({ length: pageCount }, (_, i) => i).map(num => (
            <PageDot
              key={num}
              $current={num == curPage}
              onClick={() => {
                setCurPage(num);
              }}
            />
          ))}
        </PageDotList>
      </ContentDiv>
    </ContainerDiv>
  );
}

export default ClubBanner;
