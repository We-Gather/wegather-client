import styled from 'styled-components';
import { clubRecruitCard } from '@/types/clubRecruitCard';
import { useState } from 'react';
import { Star as EmptyStarIcon } from '@styled-icons/boxicons-regular/Star';
import { Star as FilledStarIcon } from '@styled-icons/boxicons-solid/Star';

const MainContainer = styled.div`
	width: 62.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ClubRecuitContainer = styled.div`
	width: 62.5rem;
	height: 6.25rem;
	flex-shrink: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 10px 10px 0 0;
	border: 1px solid #c9c9c9;
	background: #fff;
`;

const ClubNameDateContainer = styled.div`
	width: 15rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ClubDescriptionContainer = styled.div`
	width: 36.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
const ClubDescription = styled.p`
	color: #585858;
	text-align: start;
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.375rem;
	letter-spacing: 0.0625rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;
const VerticalLine = styled.div`
	width: 0.0625rem;
	height: 4.375rem;
	margin-right: 1.5rem;
	background: #d9d9d9;
`;

const ClubDeadline = styled.p`
	color: #585858;
	font-size: 0.6875rem;
	font-weight: 400;
	line-height: 1.375rem;
	letter-spacing: 0.0625rem;
`;
const ClubSubmitButton = styled.button`
	width: 7rem;
	height: 2.25rem;
	flex-shrink: 0;
	margin: 1rem 2rem 1rem 2rem;
	border-radius: 30px;
	border: 1px solid #36bf7f;
	background: #36bf7f;
	color: #fff;
`;

const ClubDeadlineCounter = styled.div`
	width: 2.75rem;
	height: 1.25rem;
	flex-shrink: 0;
	justify-content: center;
	display: flex;
	align-items: center;
	border-radius: 1.875rem;
	background: #c4c4c4;
	color: #fff;
	font-size: 0.6875rem;
	font-weight: 800;
	line-height: 150%;
`;
const ClubRecruitName = styled.p`
	color: #000;
	margin: 0.75rem 0;
	font-size: 1.125rem;
	font-weight: 700;
	letter-spacing: 0.0625rem;
`;
const ClubApplicantCount = styled.p`
	color: #585858;
	text-align: center;
	font-size: 0.6875rem;
	font-weight: 400;
	letter-spacing: 0.0625rem;
`;
const ClubApplicantCountSpan = styled.span`
	color: #3574f2;
	font-size: 0.6875rem;
	font-weight: 700;
	letter-spacing: 0.0625rem;
`;
const ToggleButton = styled.button`
	height: 1.5rem;
	border: none;
	border-radius: 0 0 10px 10px;
	color: #000;
	background: none;
`;
const DeadLineWrapper = styled.div`
	width: 100%;
	display: flex;
  position: relative;
	align-items: center;
	justify-content: center;
`;
const StarButton = styled.button`
	position: absolute;
	display: inline-block;
	left: 0;
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	border: none;
	color: #fff;
`;
const EmptyStar = styled(EmptyStarIcon)`
	width: 1.625rem;
	height: 1.625rem;
	color: #9c9c9c;
	background-color: #fff;
`;
const FilledStar = styled(FilledStarIcon)`
	width: 1.625rem;
	height: 1.625rem;
	color: #fbbc05;
	background-color: #fff;
`;
interface StyledPreviewProps {
	$visible: boolean;
}
const activeExist = ({ $visible = true }: StyledPreviewProps) => {
	return `height: ${$visible ? '19rem' : '1.5rem'}`;
};

const PreviewWrapper = styled.div<StyledPreviewProps>`
	display: flex;
	flex-direction: column;
	width: 62.5rem;
	border-radius: 0 0 10px 10px;
	border: 1px solid #c9c9c9;
	${activeExist};
	color: #000;
	transition: height 0.3s ease-in-out;
	background: #e5e5e5;
`;
interface Props {
	recruitInfo: clubRecruitCard;
}
export default function ClubRecruitCard({ recruitInfo }: Props) {
	const [visible, seVisible] = useState(false);
	const [isStartClicked, setStarClicked] = useState(false);

	const handleClick = () => {
		setStarClicked(!isStartClicked);
	};
	const endDate: Date = new Date(recruitInfo.endDate);
	const today: Date = new Date();
	const timeDifference: number = endDate.getTime() - today.getTime();
	const daysRemaining: number = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

	
	return (
		<MainContainer>
			<ClubRecuitContainer>
				<ClubNameDateContainer>
					<DeadLineWrapper>
						<StarButton onClick={handleClick}>{!isStartClicked ? <EmptyStar /> : <FilledStar />}</StarButton>
						<ClubDeadlineCounter>Day-{daysRemaining > 0 ? daysRemaining : 0}</ClubDeadlineCounter>
					</DeadLineWrapper>
					<ClubRecruitName>{recruitInfo.title}</ClubRecruitName>
					<ClubApplicantCount>
						지원자 : <ClubApplicantCountSpan>{recruitInfo.applicantCount}</ClubApplicantCountSpan>명
					</ClubApplicantCount>
				</ClubNameDateContainer>
				<VerticalLine />
				<ClubDescriptionContainer>
					<ClubDescription>{recruitInfo.description}</ClubDescription>
					<ClubDeadline>
						{recruitInfo.startDate} ~ {recruitInfo.endDate}
					</ClubDeadline>
				</ClubDescriptionContainer>
				<ClubSubmitButton>지원하기</ClubSubmitButton>
			</ClubRecuitContainer>
			<PreviewWrapper $visible={visible}>
				<ToggleButton onClick={() => seVisible(!visible)}>미리보기</ToggleButton>
			</PreviewWrapper>
		</MainContainer>
	);
}
