import ClubProfile from '@/components/profile/ClubProfile';
import styled from 'styled-components';
import clubProfile from '@/types/profile';
import { useState } from 'react';
import ClubInfoRecruitCardList from './ClubInfoRecruitCardList';

const ClubMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	place-content: center;
	align-items: center;
`;

const TabMenu = styled.ul`
	width: 65rem;
	border-radius: 0.625rem 0.625rem 0rem 0rem;
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
		border-radius: 0.625rem 0.625rem 0rem 0rem;
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

const TapMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
`;

const Desc = styled.div`
	width: 71.875rem;
	min-height: 28.25rem;
	text-align: center;
	flex-shrink: 0;
	border-radius: 0.625rem;
	background: #fff;
`;
const PosterWrapper = styled.div`
	width: 71.875rem;
	height: 40rem;
	flex-shrink: 0;
	margin-top: 4rem;
	border-radius: 0.625rem;
	border: 1px solid #d9d9d9;
	background: #fff;
`;

const menuArr = [
	{ id: 1, name: '모집공고'},
	{ id: 2, name: '동아리 정보'},
	{ id: 3, name: '동아리 활동'},
	{ id: 4, name: '회계'},
];

const mockProfile: clubProfile = {
	name: '웹사이트 제작 동아리 Wegather',
	image: '/public/cat.jpg',
	description: '동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리\
								동아리 설명 동아리 설명 동아리 설명 동아리 설명 (최대 2줄)',
	url: 'test',
	tag: ['text', 'text', 'text', 'text', 'text'],
};

export default function ClubMain() {
	const [currentTab, clickTab] = useState(0);
	const selectMenuHandler = (index: number) => {
		clickTab(index);
	};

	return (
		<ClubMainContainer>
			<ClubProfile profile={mockProfile} />
			<TapMenuWrapper>
				<TabMenu>
					{menuArr.map((tap, index) => {
						return (
							<li
								key={index}
								className={currentTab === index ? 'submenu focused' : 'submenu'}
								onClick={() => selectMenuHandler(index)}
							>
								{tap.name}
							</li>
						);
					})}
				</TabMenu>
				<Desc>
					<ClubInfoRecruitCardList />
					{/* <p>{menuArr[currentTab].content}</p> */}
				</Desc>
			</TapMenuWrapper>
			<PosterWrapper></PosterWrapper>
		</ClubMainContainer>
	);
}
