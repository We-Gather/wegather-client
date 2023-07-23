import ClubProfile from '@/components/profile/ClubProfile';
import styled from 'styled-components';
import {clubProfile} from '@/types/profile';

const ClubMainContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
`;


const mockProfile: clubProfile = {
  id:0,
  name: '웹사이트 제작 동아리 Wegather',
  image: '/public/cat.jpg',
  description: '동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리 설명 동아리\
								동아리 설명 동아리 설명 동아리 설명 동아리 설명 (최대 2줄)',
	url: 'test',
  tag: [{text:'test1'},{text:'test1'},{text:'test1'},{text:'test1'},{text:'test1'}],
	// tag: [{id:0, text:'test'},{id:1, text:'test1'},{id:2, text:'test2'}]
};

export default function clubMain() {


	return (
		<ClubMainContainer>
			<ClubProfile profile={mockProfile}/>			
		</ClubMainContainer>
	);
}