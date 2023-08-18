import clubProfile from '@/types/profile';
import styled from 'styled-components';
import Image from 'next/image';
import TagOrange from '@/components/tag/TagOrange';
import TagGray from '@/components/tag/TagGray';
import { useState } from 'react';
import LikeButton from '@/components/button/LikeButton';
import BookMarkButton from '@/components/button/BookMarkButton';
import ShareButton from '@/components/button/ShareButton';
import MailButton from '@/components/button/MailButton';
import Cat from '/public/cat.png'

const ClubMainContainer = styled.div`
	width: 71.875rem;
	height: 18.75rem;
	flex-shrink: 0;
	border-radius: 10px;
	border: 1px solid #d9d9d9;
	background: #fff;
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
	color: #c9c9c9;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
const ClubColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0 1rem 1rem;
`;
const IconRowContainer = styled.div`
	display: flex;
	margin-right: 2rem;
	min-width: 15rem;
	justify-content: flex-end;
`;
const ImageWrapper = styled(Image)`
	width: 7.5rem;
	height: 7.5rem;
	flex-shrink: 0;
	border-radius: 50%;
`;

interface Props {
	profile: clubProfile;
}

export default function ClubProfile({ profile }: Props) {
	const [isLikeButtonClicked, setLikeButtonClicked] = useState(false);
	const [isBookmarkButtonClicked, setBookmarkButtonClicked] = useState(false);
	const [isShareButtonClicked, setShareButtonClicked] = useState(false);
	const [isMailButtonClicked, setMailButtonClicked] = useState(false);

	return (
		<ClubMainContainer>
			<ClubRowContainer>
				<ClubImgaeWapper>
					<ImageWrapper src={Cat} alt="Profile" />					
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
						{profile.tag.map((el:string, index:number) =>
							index !== 0 ? <TagGray key={index} text={el} id={0} /> : <TagOrange key={index} text={el} id={0} />
						)}
					</ClubTagContainer>
					<ClubTagContainer>
						<HashBlack># </HashBlack>
						{profile.tag.map((el:string, index:number) => (
							<TagGray key={index} text={el} id={0} />
						))}
					</ClubTagContainer>
				</ClubColumnContainer>
				<IconRowContainer>
					<LikeButton isClicked={isLikeButtonClicked} setClicked={setLikeButtonClicked} />
					<BookMarkButton isClicked={isBookmarkButtonClicked} setClicked={setBookmarkButtonClicked} />
					<ShareButton isClicked={isShareButtonClicked} setClicked={setShareButtonClicked} />
					<MailButton isClicked={isMailButtonClicked} setClicked={setMailButtonClicked} />
				</IconRowContainer>
			</ClubTagIconRowContainer>
		</ClubMainContainer>
	);
}