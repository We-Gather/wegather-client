import { SetStateAction, Dispatch, useState } from "react";
import styled from "styled-components";
import {ShareAlt as EmptyShareIcon} from '@styled-icons/boxicons-regular/ShareAlt'
import {ShareAlt as FilledShareIcon} from '@styled-icons/boxicons-solid/ShareAlt'

const IconButton = styled.button`
	margin: 0.75rem;
	background-color: #FFF;
	border: none;
	color: #FFF;
`;

const EmptyShare = styled(EmptyShareIcon)`
	width: 1.875rem;
	height: 1.875rem;
	color: #9C9C9C;
	background-color: #FFF;
`;
const FilledShare = styled(FilledShareIcon)`
	width: 1.875rem;
	height: 1.875rem;
	color: #585858;
	background-color: #FFF;
`;

interface Props {
	isClicked: boolean,
	setClicked: Dispatch<SetStateAction<boolean>>
};
export default function ShareButton({isClicked, setClicked}: Props) {
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
		<IconButton onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{!isHovered ?	<EmptyShare/> : <FilledShare/>}
		</IconButton>
	);
}
