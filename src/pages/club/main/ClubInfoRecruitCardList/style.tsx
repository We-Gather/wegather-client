import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SearchSortContainer = styled.div`
	height: 6.5rem;
	width: 62.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const InputWrapper = styled.div`
	position: relative;
	display: block;
`;
export const RecruitSearchInput = styled.input`
	width: 23.75rem;
	height: 2.5rem;
	flex-shrink: 0;
	border-radius: 30px;
	border: 1px solid #c9c9c9;
	background: #fff;
`;
export const SearchButton = styled.button`
	display: inline-block;
	position: absolute;
	height: 100%;
	right: 1rem;
	background-color: transparent;
	border: none;
	color: #fff;
`;
export const SearchIcon = styled(SearchAlt2)`
	width: 1.5rem;
	height: 1.5rem;
	color: #585858;
`;
export const RecruitCardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const RecruitCardWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
`;
