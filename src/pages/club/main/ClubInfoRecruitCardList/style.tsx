import { Search } from '@styled-icons/evil/Search';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 0.8125rem;
`;

export const SearchSortContainer = styled.div`
  padding: 2.5rem 1.63rem 4.31rem 1.63rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.31rem;
  background-color: #fff;
  border-top-right-radius: 0.8125rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: block;
`;
export const RecruitSearchInput = styled.input`
  width: 33.1875rem;
  height: 2.5rem;
  padding: 0 1rem;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #c9c9c9;
  background: #fff;
`;
export const SearchButton = styled.button`
  display: inline-block;
  position: absolute;
  height: 100%;
  right: 1rem;
  background-color: transparent;
  border: none;
  color: #fff;
`;
export const SearchIcon = styled(Search)`
  width: 1.5rem;
  height: 1.5rem;
  color: #585858;
`;
export const RecruitCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const RecruitCardWrapper = styled.div`
  display: flex;
  align-items: center;
`;
