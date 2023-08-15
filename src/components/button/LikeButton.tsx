import { SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import {Heart as EmptyHeartIcon} from '@styled-icons/boxicons-regular/Heart'
import {Heart as FilledHeartIcon} from '@styled-icons/boxicons-solid/Heart'

const IconButton = styled.button`
	margin: 0.75rem;
	background-color: #FFF;
	border: none;
	color: #FFF;
`;

const EmptyHeart = styled(EmptyHeartIcon)`
	width: 1.875rem;
	height: 1.875rem;
	color: #9C9C9C;
	background-color: #FFF;
`;
const FilledHeart = styled(FilledHeartIcon)`
	width: 1.875rem;
	height: 1.875rem;
	color: #F88;
	background-color: #FFF;
`;

interface Props {
	isClicked: boolean,
	setClicked: Dispatch<SetStateAction<boolean>>
};
export default function LikeButton({isClicked, setClicked}: Props) {
	
	const handleClick = () => {
    setClicked(!isClicked);
  };
	
	return (
		<IconButton onClick={handleClick}>
			{!isClicked ?	<EmptyHeart/> : <FilledHeart/>}
		</IconButton>
	);
}
