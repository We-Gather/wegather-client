import { Envelope as EmptyMailIcon } from '@styled-icons/boxicons-regular/Envelope';
import { Envelope as FilledMailIcon } from '@styled-icons/boxicons-solid/Envelope';
import styled from 'styled-components';

export const IconButton = styled.div`
  border: none;
  color: #fff;
`;

export const EmptyMail = styled(EmptyMailIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
export const FilledMail = styled(FilledMailIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #585858;
`;
