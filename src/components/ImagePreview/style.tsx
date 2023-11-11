import styled from 'styled-components';

export const ImageContainer = styled.div`
	
`;
export const LogoRowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1.25rem;
`;
export const LogoInput = styled.label`
	width: 22.25rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #eee;
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
`;
export const LogoButton = styled.label`
	width: 6.0625rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #585858;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
interface PreviewBoxProps {
  width: string;
  height: string;
}
export const PreviewBox = styled.div<PreviewBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
	border-radius: 0.3125rem;
	border: 1px dashed #585858;
	background: #EEE;
	display: flex;
	justify-content: center;
	align-items: center;
`;
