import dayjs from 'dayjs';
import React from 'react';

import Checkbox from '@/components/checkbox';

import { StyledTable } from '../style';
import { CountInfo, NumWrapper } from './style';

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
function MemberInfo({
  memberList,
  onDetailHandler,
}: {
  memberList: MemberType[];
  onDetailHandler: () => void;
}) {
  return (
    <>
      <CountInfo>
        총 인원 : <span>{memberList.length}</span>명
      </CountInfo>
      <StyledTable width='100%'>
        <thead>
          <tr>
            <th>
              <Checkbox checked={false} />
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
                <Checkbox checked={false} />
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
                <button onClick={onDetailHandler}>자세히보기</button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}

export default MemberInfo;
