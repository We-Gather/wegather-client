import { SetStateAction, Dispatch, useState } from 'react';
import styled from 'styled-components';
import { ShareAlt as EmptyShareIcon } from '@styled-icons/boxicons-regular/ShareAlt';
import { ShareAlt as FilledShareIcon } from '@styled-icons/boxicons-solid/ShareAlt';

const IconButton = styled.div`
  border: none;
  color: #fff;
`;

const EmptyShare = styled(EmptyShareIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
const FilledShare = styled(FilledShareIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #585858;
`;

interface Props {
  isClicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}
export default function ShareButton({ isClicked, setClicked }: Props) {
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
      {!isHovered ? <EmptyShare /> : <FilledShare />}
    </IconButton>
  );
}
