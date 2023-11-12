import { Search } from '@styled-icons/boxicons-regular/Search';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
  gap: 4.31rem;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3.75rem;
  letter-spacing: 0.0625rem;
`;

export const TitleContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.19rem;
`;

export const TitleDescriptionDiv = styled.div`
  font-weight: 400;
  line-height: normal;
  text-align: center;
  font-size: 1.125rem;
  letter-spacing: -0.03375rem;
  & span {
    font-weight: 700;
    color: #1ca526;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  & input {
    height: 2.75rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    width: 39.875rem;
    border: 1px solid #c9c9c9;
    background: #fff;
    padding-left: 1.69rem;
    box-sizing: border-box;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.69rem;
  justify-content: center;
`;

export const DirectButton = styled.button<{ $colored?: string }>`
  display: inline-flex;
  padding: 0.69rem 1.5rem;
  align-items: center;
  border-radius: 3.125rem;
  border: 1px solid ${props => (props.$colored ? '#1CA526;' : '#585858')};
  background: #fff;
  cursor: pointer;
  word-break: keep-all;
  & div {
    color: ${props => (props.$colored ? '#1CA526;' : '#585858')};
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.01313rem;
    & b {
      font-weight: 700;
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

export const ClubListContentDiv = styled.div`
  width: 75rem;
  height: 44.1875rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #c9c9c9;
  padding: 2.5rem 0;
  background: #fff;
  position: relative;
`;

export const PaginationWrapper = styled.div`
  margin-top: 1.31rem;
  align-self: center;
`;

export const ClubListToolbarDiv = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
`;

export const ContentContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SortButton = styled.button<{ selected?: boolean }>`
  display: inline-flex;
  padding: 0.25rem 1.25rem;
  align-items: center;
  border-radius: 3.125rem;
  letter-spacing: -0.0225rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: none;
  background-color: ${props => (props.selected ? '#1CA526' : '#E8E8E8')};
  color: ${props => (props.selected ? '#fff' : '#585858')};
  cursor: pointer;
`;

export const SortByWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.38rem;
`;

export const ClubCardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1.31rem;
  grid-row-gap: 1.94rem;
  padding: 0 11.75rem;
`;

export const CheckWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  & div {
    color: #585858;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.02625rem;
    & span {
      color: #1ca526;
    }
  }
`;
