import { Search } from '@styled-icons/boxicons-regular/Search';
import styled from 'styled-components';

export const TitleDiv = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.2rem 0;
`;

export const ContainerDiv = styled.div`
  border-radius: 0.625rem;
  border: 1px solid #c9c9c9;
  padding: 1.8rem 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;

export const SearchRow = styled.div`
  display: flex;
  gap: 5rem;
`;

export const DetailSearchItem = styled.div`
  display: flex;
  > label {
    color: #000;
    font-size: 0.875rem;
    font-weight: 400;
    width: 5rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    &::before {
      content: '';
      width: 0.3125rem;
      height: 0.3125rem;
      border-radius: 50%;
      flex-shrink: 0;
      background-color: #d9d9d9;
    }
  }
  > input {
    width: 18.75rem;
    height: 1.5625rem;
    border-radius: 0.3125rem;
    border: 1px solid #c9c9c9;
    background: #fff;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3125rem;
  border: 1px solid #585858;
  background: #fff;
  width: 7.5rem;
  height: 1.875rem;
  position: absolute;
  bottom: 1.12rem;
  right: 1.44rem;
  padding: 0 1rem;
  box-sizing: border-box;
  color: #585858;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
`;

export const SearchIcon = styled(Search)`
  width: 1.07588rem;
  height: 1.32963rem;
  flex-shrink: 0;
  color: #585858;
`;
