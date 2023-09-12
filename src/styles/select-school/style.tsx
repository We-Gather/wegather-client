import styled from 'styled-components';
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3.75rem;
  letter-spacing: 0.0625rem;
  margin-bottom: 4.69rem;
`;

export const TitleDescriptionDiv = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
  & span {
    font-weight: 800;
    color: #36bf7f;
  }
`;

export const SchoolListHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.19rem;
  & h3 {
    margin-bottom: 0;
    margin-left: 1rem;
    width: 23.75rem;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  & input {
    width: 23.75rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 1px solid #c9c9c9;
    background: #fff;
    padding-left: 1.69rem;
    box-sizing: border-box;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.94rem;
  margin-right: 1rem;
  justify-content: end;
  width: 23.75rem;
`;

export const DirectButton = styled.button<{ colored?: string }>`
  display: inline-flex;
  padding: 0.75rem 1.625rem;
  align-items: center;
  gap: 1.125rem;
  border-radius: 3.125rem;
  border: 1px solid ${(props) => (props.colored ? '#36bf7f;' : '#585858')};
  background: #fff;
  box-shadow: 0px 2px 4px 0px #c8dbd2;
  cursor: pointer;
  word-break: keep-all;
  & div {
    color: ${(props) => (props.colored ? '#36bf7f;' : '#585858')};
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.01313rem;
    & b {
      font-weight: 800;
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 1.07588rem;
  height: 1.32963rem;
  flex-shrink: 0;
  color: #585858;
  position: absolute;
  right: 1rem;
`;

export const SchoolListContentDiv = styled.div`
  width: 75rem;
  height: 51.25rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #c9c9c9;
  background: #fff;
  overflow: auto;
  position: relative;
`;

export const PaginationWrapper = styled.div`
  margin-top: 1.69rem;
`;

export const SchoolListToolbarDiv = styled.div`
  height: 3.87rem;
  border-bottom: 1px solid #d9d9d9;
  align-items: center;
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  & span {
    color: #585858;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.09375rem;
    padding: 1.56rem 1.25rem;
  }
`;

export const SortButton = styled.button<{ selected?: boolean }>`
  display: inline-flex;
  padding: 0.75rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  font-size: 0.75rem;
  font-weight: 400;
  border: ${(props) => (props.selected ? 'none' : '1px solid #9c9c9c')};
  background: ${(props) => (props.selected ? '#C9C9C9' : '#fff')};
  cursor: pointer;
`;

export const SortByWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.56rem;
  margin-left: 1.12rem;
`;

export const BorderLine = styled.div`
  width: 0.0625rem;
  height: 1.875rem;
  background: #d9d9d9;
`;

export const SchoolListContent = styled.div`
  display: flex;
  margin-top: 2.21rem;
  align-items: center;
  justify-content: center;
`;

export const SchoolCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55rem;
  padding-bottom: 2.13rem;
  box-sizing: border-box;
  column-gap: 2.19rem;
  row-gap: 3.12rem;
`;
