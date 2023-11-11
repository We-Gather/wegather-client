import { ShareAlt as EmptyShareIcon } from '@styled-icons/boxicons-regular/ShareAlt';
import { ShareAlt as FilledShareIcon } from '@styled-icons/boxicons-solid/ShareAlt';
import styled from 'styled-components';

export const IconButton = styled.div`
  border: none;
  color: #fff;
`;

export const EmptyShare = styled(EmptyShareIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
export const FilledShare = styled(FilledShareIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #585858;
`;
