import { Dispatch, SetStateAction } from 'react';

import { EmptyHeart, FilledHeart, IconButton } from './style';

interface Props {
  isClicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}
export default function LikeButton({ isClicked, setClicked }: Props) {
  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <IconButton onClick={handleClick}>
      {!isClicked ? <EmptyHeart /> : <FilledHeart />}
    </IconButton>
  );
}
