import { useState } from 'react';
import styled from 'styled-components';

const StyledSelectbox = styled.div`
	position: relative;
	width: 6.875rem;
	height: 1.875rem;
	flex-shrink: 0;
	border-radius: 1.875rem;
	color: #000;
	background: transparent;
	cursor: pointer;
`;

const StyledSelectedLabel = styled.button`
	display: flex;
	align-items: center;
	border: none;
	width: inherit;
	height: inherit;
	justify-content: center;
	border-radius: 1.875rem;
	color: #000;
	background: #e5e5e5;
	cursor: pointer;
`;

const StyledOptionItem = styled.li`
	box-sizing: border-box;
	font-size: 0.75rem;
	width: 100%;
	height: 1.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;
	&:hover {
		background: #e5e5e5;
	}
`;

interface StyledOptionListProps {
	$active: boolean;
}

const activeExist = ({ $active = true }: StyledOptionListProps) => {
  return `
    max-height: ${$active ? '3.75rem' : '0'};
    border: ${$active ? '1px solid #000' : 'none'};
  `;
};

const StyledOptionList = styled.ul<StyledOptionListProps>`
	box-sizing: border-box;
	position: absolute;
	list-style-type: none;
	top: 2.5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid #000;
	background: #fff;

	color: #000;
	${(props) => activeExist(props)};
	transition: 0.2s ease-in-out;
	overflow-y: scroll;
`;

interface DropdownProps {
	list: Array<string>;
}

export default function SortDropDown({ list }: DropdownProps) {
	const [active, setActive] = useState(false);
	const [selected, setSelected] = useState(list[0]);
	return (
		<StyledSelectbox>
			<StyledSelectedLabel value={selected} onClick={() => setActive(!active)}>
				{selected}
			</StyledSelectedLabel>
			<StyledOptionList $active={active}>
				{list
					.filter((element) => element !== selected)
					.map((element) => (
						<StyledOptionItem
							key={element}
							onClick={() => {
								setActive(false);
								setSelected(element);
							}}
						>
							{element}
						</StyledOptionItem>
					))}
			</StyledOptionList>
		</StyledSelectbox>
	);
}
