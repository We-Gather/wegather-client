import React, { useCallback, useState } from 'react';
import Checkbox, { CheckboxChangeEvent } from 'rc-checkbox';
import { StyledTable } from '../style';
import { CountInfo, NumWrapper } from './style';
import dayjs from 'dayjs';

/**
 * 운영진 목록 테이블 컴포넌트
 */
function StaffMember() {
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

  // 일괄 체크 버튼 클릭 핸들러
  const AllCheckButton = useCallback((e: CheckboxChangeEvent) => {}, []);

  return (
    <>
      <CountInfo>
        총 인원 : <span>{staffList.length}</span>명
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
          {staffList.map((staff, i) => (
            <tr key={i}>
              <td>
                <Checkbox />
              </td>
              <td>
                <NumWrapper>{staff.id}</NumWrapper>
              </td>
              <td>{staff.role}</td>
              <td>{staff.name}</td>
              <td>{staff.studentNumber}</td>
              <td>{staff.group}</td>
              <td>{dayjs(staff.joinDate).format('YYYY.MM.DD')}</td>
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

export default StaffMember;
