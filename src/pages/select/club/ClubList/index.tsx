import React, { useState } from 'react';

import {
  ClubDiscriptionDiv,
  ClubDiv,
  ClubImage,
  ClubInfoDiv,
  ClubTitleDiv,
  ContainerDiv,
  EmptyStar,
  FilledStar,
  StarButton,
  TagListDiv
} from './style';

function ClubList() {
  // 임시 데이터
  const club = {
    name: '댄스 동아리1',
    discription:
      '댄스동아리 설명 댄스동아리 설명 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스동아리 설명 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리 댄스동아리 설명 댄스 동아리',
    memberCount: 32,
    applicantCount: 32,
    announceCount: 3,
    tags: ['연합동아리', '개발', '디자인'],
  };
  const clubList = [club, club, club, club, club, club];
  const [isStartClicked, setStarClicked] = useState(false); // 별 클릭 여부

  return (
    <div>
      <ContainerDiv>
        {clubList.map((club, i) => (
          <ClubDiv key={i}>
            <ClubTitleDiv>
              <ClubImage $url='/tmp' />
              <div>{club.name}</div>
            </ClubTitleDiv>
            <ClubDiscriptionDiv>
              <div>{club.discription}</div>
            </ClubDiscriptionDiv>
            <ClubInfoDiv>
              동아리원 {club.memberCount}명 / 지원자수 {club.applicantCount}명{' '}
              <br />
              모집중인 공고 {club.announceCount}개
            </ClubInfoDiv>
            <TagListDiv>
              {club.tags.map((tag, i) => (
                <div key={i}>{tag}</div>
              ))}
            </TagListDiv>
            <StarButton
              onClick={() => {
                setStarClicked(prev => !prev);
              }}>
              {!isStartClicked ? <EmptyStar /> : <FilledStar />}
            </StarButton>
          </ClubDiv>
        ))}
      </ContainerDiv>
    </div>
  );
}

export default ClubList;
