import styled from "styled-components"


export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
`;
export const HeaderMenuConatainer = styled.div`
	width: 66.875rem;
	display: flex;
	flex-direction: row;
	position: fixed;
`;
export const HeaderButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
export const EssentialInfoConatainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #fff;
	color: #000;
	border-radius: 10px;
`;
export const AditionalInfoConatainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ClubRowWrapper = styled.div`
	width: 58.625rem;
	display: flex;
	margin: 1rem 0;
	flex-direction: row;
	align-items: start;
	background-color: #fff;
	/* justify-content: space-between; */
`;
export const InfoText = styled.span`
	width: 8rem;
	color: #585858;
	flex-shrink: 0;
	font-size: 0.875rem;
	font-weight: 800;
	padding-left: 1rem;
	margin-top: 0.45rem;
`;
export const ClubNameInput = styled.input`
	width: 50.625rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #fff;
	color: #000;
`;
export const ClubTypeContainer = styled.div`
	height: 5.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const ClubTypeWrapper = styled.div`
	width: 50.625rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
export const ClubTypeRadio = styled.input.attrs(() => ({
	type: 'radio',
}))`
	
`;