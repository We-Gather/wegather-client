import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Checkbox from 'rc-checkbox';
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

/**
 * 학교 정보 컴포넌트 (학교 선택 시 학교 목록 조회 화면)
 */
function SchoolInfo() {
  const [hovering, setHovering] = useState(false);
  const [checked, setChecked] = useState(false);

  const onChangeChecked = useCallback((e: any) => {
    setChecked(e.target.value);
  }, []);

  return (
    <ContainerDiv
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <SchoolButton>
        {/* 인증된 경우 인증마크 제공 */}
        <MarkWrapper>
          <Image src="/Icon/authentication-mark.svg" fill alt="mark" />
        </MarkWrapper>
        <SchoolLogoDiv $url="https://s3-alpha-sig.figma.com/img/3b6d/def5/c72f2489a8779375f46e1fb9fd5c9eb1?Expires=1695600000&Signature=gv-Cfg2rHrJ8XRT8K-gBfXdeo6ojMdvyTS9fu6zldNBZDwg6ab3lLeaa3obChhhaRU-QLmaji1ZybjTf-ButH66akjQjdlFdF1cm7shCcrrQCln7jbQRaDeC7iReSxBIJe4nA78fomP7bPb4MKX-KZ2AjKRC-MK0F9z3Mc4~bd12qCmzC-dEIsei4s0smpBvPUgZJ3QMltU-XlLD9X3tvWi2KJJosj54hLDAOxLvRZ0nSOED~z5EmO25FFgst6zkcyGxyiF0Kch39LGEUI0iAJFCEuDcnuYLsQ9pUlJKPYVc2klxbgKMGdQF2ivz3g0uF9b6yejZWq4FDMOFwsKalg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <Border />
        <VerticalContainer>
          <SchoolNameDiv>한양대학교</SchoolNameDiv>
          <SchoolNameDiv>서울캠</SchoolNameDiv>
        </VerticalContainer>
      </SchoolButton>
      <CheckWrapper>
        <Checkbox
          checked={checked}
          onClick={(e) => {
            setChecked((prev) => !prev);
          }}
        />
        <div
          onClick={(e) => {
            setChecked((prev) => !prev);
          }}
        >
          항상 <span>내 학교</span>로 시작
        </div>
      </CheckWrapper>
    </ContainerDiv>
  );
}

export default SchoolInfo;
