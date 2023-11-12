import { Bookmark as EmptyBookmarkIcon } from '@styled-icons/boxicons-regular/Bookmark';
import { Bookmark as FilledBookmarkIcon } from '@styled-icons/boxicons-solid/Bookmark';
import styled from 'styled-components';

export const IconButton = styled.div`
  border: none;
  color: #fff;
`;

export const EmptyBookmark = styled(EmptyBookmarkIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
export const FilledBookmark = styled(FilledBookmarkIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #585858;
`;
