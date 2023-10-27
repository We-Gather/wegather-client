import ClubProfile from '@/components/profile';
import clubProfile from '@/types/profile';
import { useState } from 'react';
import ClubInfoRecruitCardList from './ClubInfoRecruitCardList';
import React from 'react';
import {
  ClubMainContainer,
  TabMenuWrapper,
  TabMenu,
  Desc,
  PosterWrapper,
} from './style';
import { Megaphone } from '@styled-icons/fluentui-system-regular/Megaphone';
import { DocumentText } from '@styled-icons/ionicons-outline/DocumentText';
import { Info } from '@styled-icons/fluentui-system-regular/Info';
// import { People } from '@styled-icons/fluentui-system-regular/People';
// import ClubMember from './ClubMember';

const menuArr = [
  { id: 1, name: '모집공고', icon: <Megaphone size="15" /> },
  // { id: 2, name: '동아리원', icon: <People size="15" /> },
  { id: 3, name: '동아리 활동', icon: <Info size="15" /> },
  { id: 4, name: '회계', icon: <DocumentText size="15" /> },
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
      <TabMenuWrapper>
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
        <Desc>{currentTab === 0 && <ClubInfoRecruitCardList />}</Desc>
      </TabMenuWrapper>
      {currentTab === 0 && <PosterWrapper />}
    </ClubMainContainer>
  );
}
