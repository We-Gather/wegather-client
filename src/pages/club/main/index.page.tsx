import ClubProfile from '@/components/profile/ClubProfile';
import clubProfile from '@/types/profile';
import { useState } from 'react';
import ClubInfoRecruitCardList from './ClubInfoRecruitCardList';
import React from 'react';
import { ClubMainContainer, TapMenuWrapper, TabMenu, Desc, PosterWrapper } from './style';

const menuArr = [
	{ id: 1, name: '모집공고' },
	{ id: 2, name: '동아리 정보' },
	{ id: 3, name: '동아리 활동' },
	{ id: 4, name: '회계' },
];

const mockProfile: clubProfile = {
	name: '웹사이트 제작 동아리 Wegather',
	image: '/public/cat.jpg',
	description:
		'동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리\
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
					{currentTab === 0 ? <ClubInfoRecruitCardList /> : <></>}
				</Desc>
			</TapMenuWrapper>
			<PosterWrapper></PosterWrapper>
		</ClubMainContainer>
	);
}
