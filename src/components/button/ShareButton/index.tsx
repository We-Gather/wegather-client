import { Dispatch, SetStateAction, useState } from 'react';

import { EmptyShare, FilledShare, IconButton } from './style';

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
