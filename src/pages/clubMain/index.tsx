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