import styled from 'styled-components';
const TagWrapper = styled.div`
	display: inline-flex;
	margin: 0 0.25rem 0 0.25rem;
	padding: 0.3125rem 1.25rem;
	align-items: flex-start;
	gap: 0.625rem;
	border-radius: 50px;
	background: #F2D0A7;
	
`;

const TagWord = styled.p`
	color: #585858;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

interface Props {
	id: number;
	text: string;
}

export default function TagOrange ({text} : Props) {
	return (
		<TagWrapper>
			<TagWord>{text}</TagWord>
		</TagWrapper>
	);
};