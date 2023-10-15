import React, { useState, useCallback } from 'react';
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
import MemberInfo from './MemberInfo';
import DetailPopup from './DetailPopup';

/**
 * 동아리원 탭 내용 컴포넌트
 */
function ClubMember() {
  // 운영진 목록 (임시 데이터)
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      role: '동아리장',
      name: '장성혁',
      studentNumber: '2021010101',
      group: '평일반',
      joinDate: new Date(),
    },
    {
      id: 2,
      role: '동아리부장',
      name: '엄호용',
      studentNumber: '2021010101',
      group: '주말반',
      joinDate: new Date(),
    },
    {
      id: 3,
      role: '동아리부장',
      name: '엄호용',
      studentNumber: '2021010101',
      group: '주말반',
      joinDate: new Date(),
    },
  ]);

  const [showStaffDetail, setShowStaffDetail] = useState(false);

  const onClickStaffDetail = useCallback(() => {
    setShowStaffDetail((prev) => !prev);
  }, []);

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
          <MemberInfo
            memberList={staffList}
            onDetailHandler={onClickStaffDetail}
          />
        </ValueDiv>
      </FormItemDiv>
      <HorizonLine />

      <FormItemDiv>
        <LabelDiv>동아리원</LabelDiv>
        <ValueDiv>
          <MemberInfo
            memberList={staffList}
            onDetailHandler={onClickStaffDetail}
          />
        </ValueDiv>
      </FormItemDiv>
      <DetailPopup
        show={showStaffDetail}
        onClose={() => {
          setShowStaffDetail(false);
        }}
      />
    </Container>
  );
}

export default ClubMember;
