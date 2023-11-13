import Image from 'next/image';
import React from 'react';

import {
  ClubButton,
  ClubLogoDiv,
  ClubNameDiv,
  ContainerDiv,
  RoleDiv
} from './style';

/**
 * 동아리 정보 컴포넌트
 */
function ClubInfo({
  club,
}: {
  club: {
    name: string;
    role: string;
    icon: string;
  };
}) {
  // 임시 데이터
  const clubKing = false;

  return (
    <ContainerDiv>
      <ClubButton>
        <ClubLogoDiv $url={club.icon} />
        <ClubNameDiv>{club.name}</ClubNameDiv>
        <RoleDiv>
          {clubKing && (
            <Image src='/tabler_crown.svg' width={16} height={16} alt='crown' />
          )}
          {club.role}
        </RoleDiv>
      </ClubButton>
    </ContainerDiv>
  );
}

export default ClubInfo;
