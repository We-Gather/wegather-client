import styled from 'styled-components';

export const StyledTable = styled.table`
  font-size: 0.75rem;
  border-bottom-left-radius: 0.8125rem;
  border-bottom-right-radius: 0.8125rem;
  border: 1px solid #c9c9c9;
  border-spacing: 0;
  overflow: auto;
  display: block;
  table-layout: inherit;
  // 스크롤바 스타일
  /* &::-webkit-scrollbar {
    width: 0.3125rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background: #9c9c9c;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    background: #d9d9d9;
  } */

  // 테이블 헤더
  & thead {
    background-color: #f4f6f8;
    border: none;
    color: #585858;
    position: sticky;
    top: 0;
  }
  & th {
    padding: 1.19rem 0;
    text-align: center;
    font-weight: 800;
    letter-spacing: 0.0625rem;
    border-right: 1px solid #c9c9c9;
    width: 6.8181rem;
    &:last-child {
      border-right: none;
    }
  }
  // 테이블 바디
  & td {
    text-align: center;
    padding: 0.45rem 1rem;
    border-top: 1px solid #c9c9c9;
    color: #000;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0625rem;
    border-right: 1px solid #c9c9c9;
    &:last-child {
      border-right: none;
    }
    & button {
      width: 3.75rem;
      height: 1.4375rem;
      flex-shrink: 0;
      border-radius: 0.71875rem;
      border: 1px solid #585858;
      color: #585858;
      text-align: center;
      font-size: 0.75rem;
      font-weight: 400;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;

export const StatusTag = styled.div`
`;

export const ToolbarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.7rem;
    > select {
        width: 6.25rem;
        height: 1.5625rem;
        border-radius: 0.3125rem;
        border: 1px solid #c9c9c9;
        background: #fff;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.63rem;
    > button {
        width: 4.55731rem;
        height: 1.5625rem;
        flex-shrink: 0;
        border-radius: 0.3125rem;
        border: 1px solid #1CA526;
        color: #1CA526;
        text-align: center;
        font-size: 0.75rem;
        font-weight: 500;
        background-color: #fff;
        cursor: pointer;
    }
`;
