import ClubProfile from '@/components/profile/ClubProfile';
import styled from 'styled-components';
import clubProfile from '@/types/profile';
import { useState } from 'react';
const ClubMainContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
`;


const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 10px;

  .submenu {
    display: flex;
    width: calc(100% /3);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
  }

  & div.desc {
    text-align: center;
  }
`;

const TapMenuWrapper = styled.div`
	width: 71.875rem;
	height: 28.25rem;
`;

const Desc = styled.div`
  text-align: center;
	flex-shrink: 0;
	border-radius: 0.625rem;
	border: 1px solid #D9D9D9;
	background: #FFF;
`;

const menuArr = [
	{ id:1, name: 'Tab1', content: 'Tab menu ONE' },
	{ id:2, name: 'Tab2', content: 'Tab menu TWO' },
	{ id:3, name: 'Tab3', content: 'Tab menu THREE' },
];

const mockProfile: clubProfile = {
  name: '웹사이트 제작 동아리 Wegather',
  image: '/public/cat.jpg',
  description: '동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리\
								동아리 설명 동아리 설명 동아리 설명 동아리 설명 (최대 2줄)',
	url: 'test',
	tag: ['test','test','test','test','test','test','test']
};
export default function clubMain() {
	const [currentTab, clickTab] = useState(0);
  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

	return (
		<ClubMainContainer>
			<ClubProfile profile={mockProfile}/>
			
		</ClubMainContainer>
	);
}