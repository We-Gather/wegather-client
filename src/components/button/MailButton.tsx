import { SetStateAction, Dispatch, useState } from "react";
import styled from "styled-components";
import {Envelope as EmptyMailIcon} from '@styled-icons/boxicons-regular/Envelope'
import {Envelope as FilledMailIcon} from '@styled-icons/boxicons-solid/Envelope'

const IconButton = styled.button`
	margin: 0.75rem;
	background-color: #FFF;
	border: none;
	color: #FFF;
`;

const EmptyMail = styled(EmptyMailIcon)`
	width: 1.875rem;
	height: 1.875rem;
	color: #9C9C9C;
	background-color: #FFF;
`;
const FilledMail = styled(FilledMailIcon)`
	width: 1.875rem;
	height: 1.875rem;
	color: #585858;
	background-color: #FFF;
`;

interface Props {
	isClicked: boolean,
	setClicked: Dispatch<SetStateAction<boolean>>
};

export default function MailButton({isClicked, setClicked}: Props) {
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
			{!isHovered ?	<EmptyMail/> : <FilledMail/>}
		</IconButton>
	);
}
