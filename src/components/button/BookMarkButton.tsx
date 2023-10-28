import { SetStateAction, Dispatch, useState } from 'react';
import styled from 'styled-components';
import { Bookmark as EmptyBookmarkIcon } from '@styled-icons/boxicons-regular/Bookmark';
import { Bookmark as FilledBookmarkIcon } from '@styled-icons/boxicons-solid/Bookmark';

const IconButton = styled.div`
  border: none;
  color: #fff;
`;

const EmptyBookmark = styled(EmptyBookmarkIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
const FilledBookmark = styled(FilledBookmarkIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #585858;
`;

interface Props {
  isClicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}
export default function BookMarkButton({ isClicked, setClicked }: Props) {
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
      {!isHovered ? <EmptyBookmark /> : <FilledBookmark />}
    </IconButton>
  );
}
