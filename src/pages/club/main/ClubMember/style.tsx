import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormItemDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 63.125rem;
  gap: 2.31rem;
  padding: 1.88rem 0;
`;

export const MasterInfoDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 63.125rem;
  gap: 1.31rem;
  padding: 0.5rem 0;
  & span {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.09375rem;
  }
`;

export const LabelDiv = styled.div<{ $paddingTop?: string }>`
  color: #585858;
  width: 4.5rem;
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 150%;
  letter-spacing: 0.09375rem;
  ${(props) => props.$paddingTop && `padding-top: ${props.$paddingTop}rem`};
`;

export const ValueDiv = styled.div`
  display: flex;
  width: 53.125rem;
  flex-direction: column;
  color: #000;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.09375rem;
`;

export const HorizonLine = styled.div`
  width: 63.125rem;
  height: 0.0625rem;
  background: #d9d9d9;
`;

export const VerticalLine = styled.div`
  width: 0.0625rem;
  height: 1.875rem;
  background: #c9c9c9;
`;

export const StyledTable = styled.table`
  font-size: 0.75rem;
  border-radius: 0.3125rem;
  border: 1px solid #c9c9c9;
  border-spacing: 0;
  max-height: 16.3rem;
  overflow: auto;
  display: block;
  table-layout: inherit;
  // 스크롤바 스타일
  &::-webkit-scrollbar {
    width: 0.3125rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background: #9c9c9c;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    background: #d9d9d9;
  }

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
    &:last-child {
      border-right: none;
    }
    &:not(:first-child, :nth-child(2)) {
      width: 20%;
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
    &:first-child,
    &:nth-last-child(2) {
      border-right: 1px solid #c9c9c9;
    }
    & input {
      height: 1.5rem;
      flex-shrink: 0;
      border-radius: 0.3125rem;
      border: 1px solid #c9c9c9;
      color: #000;
      font-weight: 400;
      font-size: 0.75rem;
      letter-spacing: 0.01125rem;
    }
    & button {
      width: 5.0625rem;
      padding: 0.4375rem 0.3125rem;
      text-align: center;
      border-radius: 3.125rem;
      border: 1px solid #36bf7f;
      background: #fff;
      color: #36bf7f;
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0.0625rem;
      cursor: pointer;
    }
  }
`;
