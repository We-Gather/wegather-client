import clubProfile from "@/types/profile";
import styled from "styled-components";
import TagOrange from "../tag/TagOrange";
import TagGray from "../tag/TagGray";

const ClubMainContainer = styled.div`
	width: 71.875rem;
	height: 18.75rem;
	flex-shrink: 0;
	border-radius: 0.625rem;
	border: 1px solid #D9D9D9;
	background: #FFF;
	display: flex;
	flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
`;
const ClubRowContainer = styled.div`
	display: flex;
	width: 67.5rem;
	flex-direction: row;
	align-items: center;
`;
const ClubTagIconRowContainer = styled.div`
	display: flex;
	width: 67.5rem;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;
const ClubTitleWrapper = styled.div`
	display: flex;
	margin-right: 6rem;
	flex-direction: column;
`;
const ClubImgaeWapper = styled.div`
	width: 7.5rem;
	height: 7.5rem;
	flex-shrink: 0;
	background-color: #000;
	margin: 2rem 3rem 2rem 3rem;
	border-radius: 50%;
`;
const ClubTitle = styled.h2`
	color: #000;
	padding-bottom: 1rem;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
	letter-spacing: 0.0625rem;
`;
const ClubDescription = styled.p`
	color: black;
	display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
	color: #000;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem;
	letter-spacing: 0.0625rem;
`;

const ClubTagContainer = styled.div`
	display: flex;
	width: auto;
	margin: 0.5rem;
	flex-direction: row;
	align-items: center;
`;
const HorizonLine = styled.div`
	width: 67.5rem;
	border-bottom: 1px solid #aaa;
	line-height: 0.1rem;
`;
const HashBlack = styled.p`
	color: #C9C9C9;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
const ClubColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0 1rem 1rem
`;
const IconRowContainer = styled.div`
	display: flex;
	margin-right: 2rem;
	min-width: 15rem;
	justify-content: flex-end;
`
const IconWrapper = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	margin-left: 1.5rem;
	stroke-width: 1px;
	stroke: #9C9C9C;
	background-color: #000;
`
interface Props {
	profile: clubProfile;
}


export default function ClubProfile({profile}: Props) {
	return (
    <ClubMainContainer>
			<ClubRowContainer>
				<ClubImgaeWapper>
      		{/* <Image src={'/public/cat.jpg'} width={100} height={100}alt="Profile" />					 */}
				</ClubImgaeWapper>
				<ClubTitleWrapper>
					<ClubTitle>{profile.name}</ClubTitle>
      		<ClubDescription>{profile.description}</ClubDescription>
				</ClubTitleWrapper>
			</ClubRowContainer>
			<HorizonLine />
			<ClubTagIconRowContainer>
				<ClubColumnContainer>
					<ClubTagContainer>
						<HashBlack># </HashBlack>
						{profile.tag.map((el,index) => (
							(index !== 0)?	<TagGray id={index} text={el}/> :<TagOrange id={index} text={el}/>
						))}
					</ClubTagContainer>
					<ClubTagContainer>
						<HashBlack># </HashBlack>
						{profile.tag.map((el,index) => (
							<TagGray id={index} text={el}/>
						))}
					</ClubTagContainer>
				</ClubColumnContainer>
				<IconRowContainer>
					<IconWrapper></IconWrapper>
					<IconWrapper></IconWrapper>
					<IconWrapper></IconWrapper>
					<IconWrapper></IconWrapper>
				</IconRowContainer>
			</ClubTagIconRowContainer>
			
    </ClubMainContainer>
  );
}