import styled from 'styled-components';
import { SearchAlt2 } from 'styled-icons/boxicons-regular';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #f4f6f8;
`;
export const HeaderMenuConatainer = styled.div`
	width: 66.875rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: fixed;
	background: #f4f6f8;
`;
export const HeaderButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;
export const InfoType = styled.div`
	color: #585858;
	font-size: 1rem;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
	letter-spacing: 0.09375rem;
	margin: 1.3rem 0 0.5rem 1rem;
`;
export const InfoConatainer = styled.div`
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
	display: flex;
	margin: 1rem 0;
	flex-direction: row;
	align-items: start;
	background-color: #fff;
	/* justify-content: space-between; */
`;
export const TextCountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	background-color: #fff;
`;
export const TextCountInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: start;
	background-color: #fff;
`;

export const CountText = styled.p`
	color: #585858;
	font-size: 0.625rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	.span {
		color: #000;
	}
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
	padding: 0;
	text-indent: 10px;
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
}))``;
export const ClubTypeRadioSpan = styled.span`
	color: #585858;
	font-size: 0.875rem;
	font-weight: 400;
	letter-spacing: 0.0625rem;
	margin: 0 1.2rem 0 0.4rem;
`;
export const SchoolSelectWrapper = styled.div`
	display: flex;
	height: 5.5rem;
	flex-direction: row;
	align-items: center;
`;
export const SchoolSelectInput = styled.input`
	width: 15.625rem;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #fff;
	padding: 0;
	text-indent: 10px;
`;
export const CreateForm = styled.form`
	width: 66.875rem;
	padding-top: 100px;
`;
export const LogoColWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const LogoRowWrapper = styled.div`
	display: flex;
	flex-direction: row;
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
	padding: 0;
	text-indent: 10px;
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
export const ClubIntroductionInput = styled.textarea`
	width: 50.625rem;
	min-height: 4.6875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #fff;
	color: #000;
	resize: none;
	padding: 0;
`;
export const ClubExplanationInput = styled.div`
	width: 50.625rem;
	background: #fff;
	color: #000;
	resize: none;
	padding: 0;
`;
export const CatagoryContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const CatagoryRowContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
`;
export const CatagoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 9.375rem;
`;
export const CatagoryLabel = styled.div`
	width: 100%;
	display: flex;
	height: 1.875rem;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background: #f3f3f3;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 0.7rem;
`;
export const CatagoryInput = styled.input`
	width: 100%;
	height: 1.9375rem;
	border-radius: 5px 5px 0 0;
	border: 1px solid #c9c9c9;
	border-bottom: none;
	background: #fff;
	text-indent: 10px;
	padding: 0;
`;
export const CatagoryList = styled.ul`
	width: 100%;
	height: 9rem;
	border-radius: 0 0 5px 5px;
	border: 1px solid #c9c9c9;
	background: #f3f3f3;
	padding: 0;
	margin: 0;
`;
export const CatagoryListElement = styled.li`
	/* width: 100%; */
	list-style-type: none;
	padding: 0.5rem;
`;


export const InputWrapper = styled.div`
	position: relative;
	display: block;
	width: 100%;
`;
export const CatagorySearchInput = styled.input`
	width: 23.75rem;
	height: 2.5rem;
	flex-shrink: 0;
	border-radius: 30px;
	border: 1px solid #c9c9c9;
	background: #fff;
	text-indent: 10px;
`;
export const SearchButton = styled.button`
	display: inline-block;
	position: absolute;
	height: 100%;
	top: 0%;
	right: 0%;
	background-color: transparent;
	border: none;
	color: #fff;
`;
export const SearchIcon = styled(SearchAlt2)`
	width: 1rem;
	height: 1rem;
	color: #585858;
`;
export const TagContainer = styled.div`
	width: 50.625rem;
	display: flex;
	justify-content: space-between;
`;
