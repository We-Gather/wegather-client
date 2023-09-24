import React from 'react';
import {
  Container,
  MasterInfoDiv,
  FormItemDiv,
  LabelDiv,
  ValueDiv,
  HorizonLine,
  VerticalLine,
} from './style';
import InviteMember from './InviteMember';
import StaffMember from './StaffMember';

/**
 * 동아리원 탭 내용 컴포넌트
 */
function ClubMember() {
  return (
    <Container>
      <MasterInfoDiv>
        <LabelDiv>동아리장</LabelDiv>
        <VerticalLine />
        <span>장성혁</span>
      </MasterInfoDiv>
      <HorizonLine />

      <FormItemDiv>
        <LabelDiv $paddingTop="2">초대하기</LabelDiv>
        <ValueDiv>
          <InviteMember />
        </ValueDiv>
      </FormItemDiv>
      <HorizonLine />

      <FormItemDiv>
        <LabelDiv $paddingTop="1.5">운영진</LabelDiv>
        <ValueDiv>
          <StaffMember />
        </ValueDiv>
      </FormItemDiv>
      <HorizonLine />

      <FormItemDiv>
        <LabelDiv>동아리원</LabelDiv>
      </FormItemDiv>
    </Container>
  );
}

export default ClubMember;
