import React from 'react';

import {
  ContainerDiv,
  DetailSearchItem,
  SearchButton,
  SearchIcon,
  SearchRow,
  TitleDiv
} from './style';

function SearchBox() {
  return (
    <div>
      <TitleDiv>세부검색</TitleDiv>
      <ContainerDiv>
        <SearchRow>
          <DetailSearchItem>
            <label>동아리명</label>
            <input />
          </DetailSearchItem>
          <DetailSearchItem>
            <label>동아리타입</label>
          </DetailSearchItem>
        </SearchRow>
        <SearchRow>
          <DetailSearchItem>
            <label>태그</label>
            <input />
          </DetailSearchItem>
          <DetailSearchItem>
            <label>모집진행</label>
          </DetailSearchItem>
        </SearchRow>
        <SearchRow>
          <DetailSearchItem>
            <label>카테고리</label>
          </DetailSearchItem>
        </SearchRow>
        <SearchButton>
          검색하기
          <SearchIcon />
        </SearchButton>
      </ContainerDiv>
    </div>
  );
}

export default SearchBox;
