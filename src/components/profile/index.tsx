import { useState } from 'react';

import Cat from '/public/cat.png';
import BookMarkButton from '@/components/button/BookMarkButton';
import LikeButton from '@/components/button/LikeButton';
import MailButton from '@/components/button/MailButton';
import ShareButton from '@/components/button/ShareButton';
import ClubTag from '@/components/tag/ClubTag';
import clubProfile from '@/types/profile';

import {
  ClubDescription,
  ClubInfoContainer,
  ClubMainContainer,
  ClubTagContainer,
  ClubTitle,
  ClubTitleWrapper,
  IconRowContainer,
  ImageWrapper
} from './style';

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
      <ClubInfoContainer>
        <ImageWrapper src={Cat} alt='Profile' />
        <ClubTitleWrapper>
          <ClubTitle>{profile.name}</ClubTitle>
          <ClubDescription>{profile.description}</ClubDescription>
          <ClubTagContainer>
            {profile.tag.map((el: string, index: number) => (
              <ClubTag key={index} text={el} id={0} />
            ))}
          </ClubTagContainer>
        </ClubTitleWrapper>
      </ClubInfoContainer>
      <IconRowContainer>
        <span>
          <LikeButton
            isClicked={isLikeButtonClicked}
            setClicked={setLikeButtonClicked}
          />
          99
        </span>
        <BookMarkButton
          isClicked={isBookmarkButtonClicked}
          setClicked={setBookmarkButtonClicked}
        />
        <ShareButton
          isClicked={isShareButtonClicked}
          setClicked={setShareButtonClicked}
        />
        <MailButton
          isClicked={isMailButtonClicked}
          setClicked={setMailButtonClicked}
        />
      </IconRowContainer>
    </ClubMainContainer>
  );
}
