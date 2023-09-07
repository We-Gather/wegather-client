import ClubRecruitCard from '@/components/ClubRecruitCard';
import SortDropDown from '@/components/dropdown/SortDropDown';
import { clubRecruitCard } from '@/types/clubRecruitCard';
import { styled } from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SearchSortContainer = styled.div`
	height: 6.5rem;
	width: 62.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const InputWrapper = styled.div`
	position: relative;
	display: block;
`;
const RecruitSearchInput = styled.input`
	width: 23.75rem;
	height: 2.5rem;
	flex-shrink: 0;
	border-radius: 30px;
	border: 1px solid #c9c9c9;
	background: #fff;
`;
const SearchButton = styled.button`
	display: inline-block;
	position: absolute;
	height: 100%;
	right: 1rem;
	background-color: transparent;
	border: none;
	color: #fff;
`;
const SearchIcon = styled(SearchAlt2)`
	width: 1.5rem;
	height: 1.5rem;
	color: #585858;
`;
const RecruitCardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const RecruitCardWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
`;

const mockRecruitCard: clubRecruitCard = {
	title: 'UX/UI 디자이너 모집',
	description:
		'위게더 22기 디자이너를 모집합니다! 웹사이트 메인페이지 디자인을 담당하게 될 예정입니다. 성실하게 참여하실 분 이라면 누구든 환영합니다. (최대 2줄)',
	startDate: '2023-06-29',
	endDate: '2023-06-29',
	applicantCount: 10,
};

const mockCardList: Array<clubRecruitCard> = [mockRecruitCard, mockRecruitCard, mockRecruitCard, mockRecruitCard];
const dropDownList = ['최신순', '즐겨찾기순', '마감일순'];

export default function ClubInfoRecruitCardList() {
	return (
		<MainContainer>
			<SearchSortContainer>
				<InputWrapper>
					<RecruitSearchInput />
					<SearchButton>
						<SearchIcon/>
					</SearchButton>
				</InputWrapper>
				<SortDropDown list={dropDownList} />
			</SearchSortContainer>
			<RecruitCardContainer>
				{mockCardList.map((recruitInfo, index) => (
					<RecruitCardWrapper key={index}>
						<ClubRecruitCard recruitInfo={recruitInfo} />
					</RecruitCardWrapper>
				))}
			</RecruitCardContainer>
		</MainContainer>
	);
}
