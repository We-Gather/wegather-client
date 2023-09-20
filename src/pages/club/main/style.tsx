import styled from 'styled-components';

export const ClubMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	place-content: center;
	align-items: center;
`;

export const TabMenu = styled.ul`
	width: 65rem;
	border-radius: 10px 10px 0rem 0rem;
	/* border: 1px solid #C9C9C9; */
	background: #F4F6F8;
	color: rgb(232, 234, 237);
	font-weight: bold;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	list-style: none;
	margin-top: 10px;

	.submenu {
		display: flex;
		width: calc(100% / 4);
		padding: 10px;
		color: #000;
		align-items: center;
		justify-content: center;
		transition: 0.5s;
		width: 15.625rem;
		height: 3.75rem;
		border-radius: 10px 10px 0rem 0rem;
		border: 1px solid #c9c9c9;
		background: #e5e5e5;
	}

	.focused {
		height: 4.375rem;
		border-top: 1px solid #585858;
		border-right: 1px solid #585858;
		border-left: 1px solid #585858;
		border-bottom: 1px solid #fff;
		background: #fff;
	}

	& div.desc {
		text-align: center;
	}
`;

export const TapMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
`;

export const Desc = styled.div`
	width: 71.875rem;
	min-height: 28.25rem;
	text-align: center;
	flex-shrink: 0;
	border-radius: 10px;
	background: #fff;
`;
export const PosterWrapper = styled.div`
	width: 71.875rem;
	height: 40rem;
	flex-shrink: 0;
	margin-top: 4rem;
	border-radius: 10px;
	border: 1px solid #d9d9d9;
	background: #fff;
`;
