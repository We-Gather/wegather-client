import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Checkbox from '@/components/checkbox';
import {
  ContainerDiv,
  SchoolButton,
  SchoolLogoDiv,
  Border,
  SchoolNameDiv,
  VerticalContainer,
  MarkWrapper,
  CheckWrapper,
} from './style';
import { SchoolType } from '@/types/school';

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
  const [checked, setChecked] = useState(false);

  const onChangeChecked = useCallback((e: any) => {
    setChecked(e.target.value);
  }, []);

  return (
    <ContainerDiv>
      <SchoolButton $borderEffect={authenticationSchool}>
        {/* 인증된 경우 인증마크 제공 */}
        {authenticationSchool && (
          <MarkWrapper>
            <Image src="/Icon/authentication-mark.svg" fill alt="mark" />
          </MarkWrapper>
        )}
        <SchoolLogoDiv $url={school.icon} />
        <Border />
        <VerticalContainer>
          <SchoolNameDiv>{school.name}</SchoolNameDiv>
          {school.campus && <SchoolNameDiv>{school.campus}</SchoolNameDiv>}
        </VerticalContainer>
      </SchoolButton>
      {authenticationSchool && (
        <CheckWrapper
          onClick={(e) => {
            setChecked((prev) => !prev);
          }}
        >
          <Checkbox checked={checked} />
          <div>
            항상 <span>내 학교</span>로 시작
          </div>
        </CheckWrapper>
      )}
    </ContainerDiv>
  );
}

export default SchoolInfo;
