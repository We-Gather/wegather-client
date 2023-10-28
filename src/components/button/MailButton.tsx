import { Envelope as EmptyMailIcon } from '@styled-icons/boxicons-regular/Envelope';
import { Envelope as FilledMailIcon } from '@styled-icons/boxicons-solid/Envelope';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const IconButton = styled.div`
  border: none;
  color: #fff;
`;

const EmptyMail = styled(EmptyMailIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
const FilledMail = styled(FilledMailIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #585858;
`;

interface Props {
  isClicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

export default function MailButton({ isClicked, setClicked }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <IconButton
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? <EmptyMail /> : <FilledMail />}
    </IconButton>
  );
}
