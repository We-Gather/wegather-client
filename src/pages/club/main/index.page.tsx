import ClubProfile from '@/components/profile/ClubProfile';
import clubProfile from '@/types/profile';
import { useState } from 'react';
import ClubInfoRecruitCardList from './ClubInfoRecruitCardList';
import ClubMember from './ClubMember';
import React from 'react';
import {
  ClubMainContainer,
  TapMenuWrapper,
  TabMenu,
  Desc,
  PosterWrapper,
} from './style';
import { Megaphone } from '@styled-icons/fluentui-system-regular/Megaphone';
import { People } from '@styled-icons/fluentui-system-regular/People';
import { DocumentText } from '@styled-icons/ionicons-outline/DocumentText';
import { Info } from '@styled-icons/fluentui-system-regular/Info';

const menuArr = [
  { id: 1, name: '모집공고', icon: <Megaphone size="21" /> },
  { id: 2, name: '동아리원', icon: <People size="21" /> },
  { id: 3, name: '동아리 활동', icon: <Info size="21" /> },
  { id: 4, name: '회계', icon: <DocumentText size="21" /> },
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
                <div>
                  {tap.icon}&nbsp;
                  {tap.name}
                </div>
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          {currentTab === 0 ? <ClubInfoRecruitCardList /> : <></>}
          {currentTab === 1 ? <ClubMember /> : <></>}
        </Desc>
      </TapMenuWrapper>
      <PosterWrapper></PosterWrapper>
    </ClubMainContainer>
  );
}
