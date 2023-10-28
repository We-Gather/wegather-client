import { SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import { Heart as EmptyHeartIcon } from '@styled-icons/boxicons-regular/Heart';
import { Heart as FilledHeartIcon } from '@styled-icons/boxicons-solid/Heart';

const IconButton = styled.div`
  border: none;
  color: #fff;
`;

const EmptyHeart = styled(EmptyHeartIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
`;
const FilledHeart = styled(FilledHeartIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #f88;
`;

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
