import React, { useCallback, useState } from 'react';
import Checkbox, { CheckboxChangeEvent } from 'rc-checkbox';
import { StyledTable } from '../style';
import { CountInfo, NumWrapper } from './style';
import dayjs from 'dayjs';

// 임시 타입
interface MemberType {
  id: number;
  role: string;
  name: string;
  studentNumber: string;
  group: string;
  joinDate: Date;
}

/**
 * 동아리원 목록 테이블 컴포넌트
 */
function MemberInfo({ memberList }: { memberList: MemberType[] }) {
  // 일괄 체크 버튼 클릭 핸들러
  const AllCheckButton = useCallback((e: CheckboxChangeEvent) => {}, []);

  return (
    <>
      <CountInfo>
        총 인원 : <span>{memberList.length}</span>명
      </CountInfo>
      <StyledTable width="100%">
        <thead>
          <tr>
            <th>
              <Checkbox onChange={AllCheckButton} />
            </th>
            <th>No.</th>
            <th>역할</th>
            <th>이름</th>
            <th>학번</th>
            <th>그룹</th>
            <th>가입일</th>
            <th>자세히보기</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((member, i) => (
            <tr key={i}>
              <td>
                <Checkbox />
              </td>
              <td>
                <NumWrapper>{member.id}</NumWrapper>
              </td>
              <td>{member.role}</td>
              <td>{member.name}</td>
              <td>{member.studentNumber}</td>
              <td>{member.group}</td>
              <td>{dayjs(member.joinDate).format('YYYY.MM.DD')}</td>
              <td>
                <button>자세히보기</button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}

export default MemberInfo;
