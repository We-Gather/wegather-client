import React from 'react';

import SearchInput from '@/components/input/SearchInput';
import useInput from '@/hooks/useInput';

import ClubBanner from './ClubBanner';
import ClubList from './ClubList';
import SearchBox from './SearchBox';
import {ContainerDiv, ContentDiv, SchoolLogo, TitleDiv, TitleWrapper } from './style';

function SelectClub() {
  const [keyword, onChangeKeyword] = useInput(''); // 검색 키워드

  return (
    <ContainerDiv>
      <TitleWrapper>
        <TitleDiv>
          <SchoolLogo $url='/tmp' />한양대 ERICA</TitleDiv>
        <SearchInput
          placeholder='통합검색'
          value={keyword}
          onChangeValue={onChangeKeyword}
        />
        <button>학교 선택으로 돌아가기</button>
      </TitleWrapper>
      <ContentDiv>
        <ClubBanner />
        <SearchBox />
        <ClubList />
      </ContentDiv>
    </ContainerDiv>
  );
}

export default SelectClub;
