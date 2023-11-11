import { Heart as EmptyHeartIcon } from '@styled-icons/boxicons-regular/Heart';
import { Heart as FilledHeartIcon } from '@styled-icons/boxicons-solid/Heart';
import styled from 'styled-components';

export const IconButton = styled.div`
  border: none;
  color: #fff;
`;

export const EmptyHeart = styled(EmptyHeartIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
export const FilledHeart = styled(FilledHeartIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #f88;
`;
