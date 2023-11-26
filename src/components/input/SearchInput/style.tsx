import { Search } from '@styled-icons/boxicons-regular/Search';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  & input {
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    width: 39.875rem;
    border: 1px solid #c9c9c9;
    background: #fff;
    padding-left: 1.69rem;
    box-sizing: border-box;
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
