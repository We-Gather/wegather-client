import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import Checkbox from '@/components/checkbox/Checkbox';

import { ButtonWrapper, StatusTag, StyledTable, ToolbarDiv } from './style';

function ApplicantListTable() {
  const tmpData = {name:'김철수', department: '전자공학과', studentNumber: '20XXXXXXX', phone: '010-XXXX-XXXX', createDate: dayjs(), updateDate: dayjs(), document: true, status: '합격', confirmed: true};
  const tmpData2 = {name:'김철수', department: '전자공학과', studentNumber: '20XXXXXXX', phone: '010-XXXX-XXXX', createDate: dayjs(), updateDate: dayjs(), document: false, status: '불합격', confirmed: false};
  const applicants = [tmpData, tmpData2, tmpData, tmpData2, tmpData];
  const [checkedMap, setCheckedMap] = useState<boolean[]>([]);

  useEffect(()=>{
    const checkedData = Array(applicants.length).fill(false);
    setCheckedMap(checkedData);
  }, []);

  return (
    <div>
      <ToolbarDiv>
        <select/>
        <ButtonWrapper>
          <button>임시저장</button>
          <button>합격하기</button>
          <button>확정하기</button>
        </ButtonWrapper>
      </ToolbarDiv>
      <StyledTable>
        <thead>
          <tr>
            <th>
          전체
            </th>
            <th>학과</th>
            <th>학번</th>
            <th>이름</th>
            <th>연락처</th>
            <th>신청일자</th>
            <th>수정일자</th>
            <th>서류</th>
            <th>상세보기</th>
            <th>합/불</th>
            <th>확정여부</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, i)=>
            <tr key={i}>
              <td>
                <Checkbox
                  checked={checkedMap[i]} onClickHandler={()=>{
                    setCheckedMap(prev=>{
                      const newMap = [...prev];
                      newMap[i] = !newMap[i];
                      return newMap;
                    });
                  }}/>
              </td>
              <td>{applicant.department}</td>
              <td>{applicant.studentNumber}</td>
              <td>{applicant.name}</td>
              <td>{applicant.phone}</td>
              <td>{dayjs(applicant.createDate).format('YYYY-MM-DD')}</td>
              <td>{dayjs(applicant.updateDate).format('YYYY-MM-DD')}</td>
              <td>{applicant.document ? '확인 완료':'미확인'}</td>
              <td><button>상세</button></td>
              <td><StatusTag>{applicant.status}</StatusTag></td>
              <td>{applicant.confirmed ? '확정완료':'-'}</td>
            </tr>)}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default ApplicantListTable;
