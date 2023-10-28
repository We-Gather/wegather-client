import Image from 'next/image';
import React from 'react';

import { SchoolType } from '@/types/school';

import {
  ContainerDiv,
  MarkWrapper,
  SchoolButton,
  SchoolLogoDiv,
  SchoolNameDiv,
  VerticalContainer
} from './style';

/**
 * 학교 정보 컴포넌트 (학교 선택 시 학교 목록 조회 화면)
 */
function SchoolInfo({
  authenticationSchool,
  school,
}: {
  authenticationSchool?: boolean;
  school: SchoolType;
}) {
  return (
    <ContainerDiv>
      <SchoolButton $borderEffect={authenticationSchool}>
        {/* 인증된 경우 인증마크 제공 */}
        {authenticationSchool && (
          <MarkWrapper>
            <Image src='/Icon/authentication-mark.svg' fill alt='mark' />
          </MarkWrapper>
        )}
        <SchoolLogoDiv $url={school.icon} />
        <VerticalContainer>
          <SchoolNameDiv>{school.name}</SchoolNameDiv>
          {school.campus && <SchoolNameDiv>{school.campus}</SchoolNameDiv>}
        </VerticalContainer>
      </SchoolButton>
    </ContainerDiv>
  );
}

export default SchoolInfo;
