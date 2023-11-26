import React from 'react';

import ClubInfoHeader from '@/components/header/ClubInfoHeader';

import {
  CheckIcon,
  ClubInfoContainer,
  ClubInfoDiv,
  ClubMainContainer,
  ClubTitleDiv,
  ClubTitleWrapper,
  Container,
  CrossIcon,
  GoIcon,
  ImageWrapper,
  InfoContentDiv,
  InfoTitleDiv,
  ValueWrapper
} from './style';

export default function ClubProfile() {
  const authList = [
    { label: '프로필 관리', value: 0 },
    { label: '멤버 관리', value: 1 },
    { label: '모집 공고 관리', value: 2 },
    { label: '그룹 관리', value: 3 },
    { label: '회계 관리', value: 4 },
  ];
  const club = {
    type: '연합동아리',
    categories: ['이공', '컴퓨터공학', '개발'],
    name: '웹사이트 제작 동아리 Wegather',
    profilePic: '/tmp_image.png',
    role: '동아리부장',
    auths: [0, 2, 3, 4],
  };

  return (
    <Container>
      <ClubInfoHeader clubType={club.type} categories={club.categories} />
      <ClubMainContainer>
        <ImageWrapper
          src={club.profilePic}
          alt='Profile'
          width={392}
          height={392}
        />
        <ClubTitleWrapper>
          <ClubTitleDiv>{club.name}</ClubTitleDiv>
          <ClubInfoDiv>
            <ValueWrapper>
              <label>역할</label>
              <div>
                <div>{club.role}</div>
              </div>
            </ValueWrapper>
            <ValueWrapper>
              <label>권한</label>
              <div>
                {authList.map(auth => (
                  <div key={auth.value}>
                    <span>{auth.label}</span>
                    {club.auths.some(a => a === auth.value) ? (
                      <CheckIcon size='25' />
                    ) : (
                      <CrossIcon size='25' />
                    )}
                  </div>
                ))}
              </div>
            </ValueWrapper>
          </ClubInfoDiv>
        </ClubTitleWrapper>
      </ClubMainContainer>
      <ClubInfoContainer>
        <div>
          <InfoTitleDiv>기본 정보</InfoTitleDiv>
          <InfoContentDiv>
            <div>
              <GoIcon />
              프로필 관리
            </div>
            <div>
              <GoIcon />
              멤버 관리
            </div>
          </InfoContentDiv>
        </div>
        <div>
          <InfoTitleDiv>모집 공고</InfoTitleDiv>
          <InfoContentDiv>
            <div>
              <GoIcon />
              모집 공고 관리
            </div>
          </InfoContentDiv>
        </div>
        <div>
          <InfoTitleDiv>활동</InfoTitleDiv>
          <InfoContentDiv>
            <div>
              <GoIcon />
              그룹 관리
            </div>
          </InfoContentDiv>
        </div>
        <div>
          <InfoTitleDiv>회계</InfoTitleDiv>
          <InfoContentDiv>
            <div>
              <GoIcon />
              회계 관리
            </div>
          </InfoContentDiv>
        </div>
      </ClubInfoContainer>
    </Container>
  );
}
