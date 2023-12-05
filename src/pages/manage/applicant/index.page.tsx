import React, { useState } from 'react';

import ApplicantListTable from './ApplicantListTable';
import SearchBox from './SearchBox';
import { Category, ClubCategories, Content, Desc, HeaderMenuConatainer, MainContainer, Seperator, TabMenu } from './style';

function ManageApplicant() {
  const categories:string[] = ['위게더(WEGATHER)', 'UX/UI 디자이너 모집'];
  
  const stepList = [{id:1, name:'절차1'}, {id:2, name:'절차2'}, {id:3, name:'절차3'}];
  const [curStep, setCurStep] = useState(1);

  return (
    <MainContainer>
      <HeaderMenuConatainer><span>지원자 관리</span>
        <ClubCategories>
          {categories.map((cat, i) => (
            <>
              <Category key={i} selected={i === categories.length - 1}>{cat}</Category>
              <Seperator size='15' />
            </>
          ))}
        </ClubCategories>
      </HeaderMenuConatainer>
      <Content>
        <TabMenu>
          {stepList.map((step) => {
            return (
              <li
                key={step.id}
                className={curStep === step.id ? 'submenu focused' : 'submenu'}
                onClick={() => setCurStep(step.id)}>
                <div>
                  {step.name}
                </div>
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <SearchBox/>
          <ApplicantListTable/>
        </Desc>
      </Content>
    </MainContainer>
  );
}

export default ManageApplicant;
