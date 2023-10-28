import React, { useState, useCallback } from 'react';
import Modal from '@/components/modal';
import {
  Container,
  PopupHeader,
  PopupContent,
  Label,
  InfoItemWrapper,
  BasicInfoWrapper,
  InfoText,
  RoleBox,
  GroupBox,
  BottomWrapper,
  SaveButton,
  ExileButton,
} from './style';
import CheckBox from '@/components/checkbox';
import { Close as CloseIcon } from '@styled-icons/ionicons-outline/Close';
import dayjs from 'dayjs';

function DetailPopup({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  // 임시 데이터
  const member = {
    name: '장성혁',
    role: '동아리장',
    studentNumber: '2023010101',
    joinDate: dayjs(),
    auth: [],
    group: '심화반',
  };

  const [roleList, setRoleList] = useState([
    { label: '운영진', checked: false },
    { label: '모집공고 관리', checked: false },
    { label: '합격 관리', checked: false },
    { label: '활동 관리', checked: false },
    { label: '동아리원 관리', checked: false },
    { label: '회계 관리', checked: false },
  ]);

  const groupList = ['기초반', '심화반', '평일반'];

  const onClickCheckBox = useCallback(
    (index: number) => {
      roleList[index].checked = !roleList[index].checked;
      setRoleList([...roleList]);
    },
    [roleList]
  );

  return (
    <Modal show={show} onCloseModal={onClose}>
      <Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <PopupHeader>
          <div>
            자세히 보기 : 운영진
            <CloseIcon
              size="21"
              style={{ cursor: 'pointer' }}
              onClick={onClose}
            />
          </div>
        </PopupHeader>
        <PopupContent>
          <BasicInfoWrapper>
            <div>
              <InfoItemWrapper>
                <Label>이름</Label>
                <InfoText>{member.name}</InfoText>
              </InfoItemWrapper>
              <InfoItemWrapper>
                <Label>학번</Label>
                <InfoText>{member.studentNumber}</InfoText>
              </InfoItemWrapper>
            </div>
            <div>
              <InfoItemWrapper>
                <Label>역할</Label>
                <InfoText>{member.role}</InfoText>
              </InfoItemWrapper>
              <InfoItemWrapper>
                <Label>가입일</Label>
                <InfoText>
                  {dayjs(member.joinDate).format('YYYY.MM.DD')}
                </InfoText>
              </InfoItemWrapper>
            </div>
          </BasicInfoWrapper>
          <InfoItemWrapper $alignItems="start">
            <Label>권한</Label>
            <RoleBox>
              {roleList.map((role, i) => (
                <div
                  key={role.label}
                  onClick={() => {
                    onClickCheckBox(i);
                  }}
                >
                  {role.label}
                  <CheckBox checked={role.checked} />
                </div>
              ))}
            </RoleBox>
          </InfoItemWrapper>
          <InfoItemWrapper $alignItems="start">
            <Label>그룹</Label>
            <GroupBox>
              {groupList.map((group) => (
                <div key={group}>{group}</div>
              ))}
            </GroupBox>
          </InfoItemWrapper>
        </PopupContent>
        <BottomWrapper>
          <SaveButton>저장</SaveButton>
          <ExileButton>추방하기</ExileButton>
        </BottomWrapper>
      </Container>
    </Modal>
  );
}

export default DetailPopup;
