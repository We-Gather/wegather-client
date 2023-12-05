import React from 'react';

import {
  ContainerDiv,
  DetailSearchItem,
  SearchButton,
  SearchIcon,
  SearchRow
} from './style';

function SearchBox() {
  return (
    <ContainerDiv>
      <SearchRow>
        <DetailSearchItem>
          <label>이름</label>
          <input />
        </DetailSearchItem>
        <DetailSearchItem>
          <label>합격 여부</label>
          <select />
        </DetailSearchItem>
      </SearchRow>
      <SearchRow>
        <DetailSearchItem>
          <label>학번</label>
          <input />
        </DetailSearchItem>
        <DetailSearchItem>
          <label>서류 확인</label>
          <select />
        </DetailSearchItem>
      </SearchRow>
      <SearchRow>
        <DetailSearchItem>
          <label>학과</label>
          <input />
        </DetailSearchItem>
        <DetailSearchItem>
          <label>확정 여부</label>
          <select />
        </DetailSearchItem>
      </SearchRow>
      <SearchButton>
          검색하기
        <SearchIcon />
      </SearchButton>
    </ContainerDiv>
  );
}

export default SearchBox;
