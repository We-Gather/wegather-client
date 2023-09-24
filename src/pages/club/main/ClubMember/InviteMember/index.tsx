import React, { useCallback, useState } from 'react';
import Checkbox, { CheckboxChangeEvent } from 'rc-checkbox';
import { StyledTable } from '../style';
import { BatchInviteButton, ButtonWrapper, TableButton } from './style';
import { FileExcel2 as ExcelIcon } from '@styled-icons/remix-fill/FileExcel2';

// 초대하기 멤버 목록 아이템 클래스
class InviteItem {
  emailId = '';
  name = '';
  studentNumber = '';
  role = '';
  isChecked = false;
  constructor() {}
}

/**
 * 초대하기 내용 컴포넌트
 */
function InviteMember() {
  // 초대 하기 멤버 목록
  const [inviteList, setInviteList] = useState([new InviteItem()]);

  // 체크박스 클릭 핸들러
  const onChangeCheckBox = useCallback(
    (e: CheckboxChangeEvent, index: number) => {
      inviteList[index].isChecked = e.target.checked;
      setInviteList([...inviteList]);
    },
    [inviteList]
  );

  // 초대 폼 추가
  const addInvite = useCallback(() => {
    setInviteList((prev) => [...prev, new InviteItem()]);
  }, []);

  // 초대 폼 삭제
  const deleteInvite = useCallback(() => {
    let newInviteList: InviteItem[] = inviteList
      .map((invite) => {
        if (!invite.isChecked) return invite;
        invite.isChecked = false;
      })
      .filter((invite) => invite !== undefined) as InviteItem[]; // undefined 제거
    if (newInviteList.length === 0) {
      newInviteList = [new InviteItem()];
    }
    setInviteList([...newInviteList]);
  }, [inviteList]);

  // 초대 인풋 내용 변경 핸들러
  const onChangeFormInput = useCallback(
    <K extends keyof InviteItem>(
      e: React.ChangeEvent<HTMLInputElement>,
      index: number,
      key: K
    ) => {
      inviteList[index][key] = e.target.value as InviteItem[K];
      setInviteList([...inviteList]);
    },
    [inviteList]
  );

  // 일괄 초대 버튼 클릭 핸들러
  const onClickBatchInvite = useCallback(() => {
    const newInviteList: InviteItem[] = inviteList
      .map((invite) => {
        if (invite.isChecked) {
          return invite;
        }
      })
      .filter((invite) => invite !== undefined) as InviteItem[]; // undefined 제거
    console.log(newInviteList);
  }, [inviteList]);

  // 일괄 체크 버튼 클릭 핸들러
  const AllCheckButton = useCallback(
    (e: CheckboxChangeEvent) => {
      const isChecked = e.target.checked;
      const newInviteList: InviteItem[] = inviteList.map((invite) => {
        invite.isChecked = isChecked;
        return invite;
      });
      setInviteList([...newInviteList]);
    },
    [inviteList]
  );

  return (
    <>
      <BatchInviteButton onClick={onClickBatchInvite}>
        일괄초대
      </BatchInviteButton>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <Checkbox onChange={AllCheckButton} />
            </th>
            <th>이메일 ID</th>
            <th>이름</th>
            <th>학번</th>
            <th>역할</th>
            <th>초대하기</th>
          </tr>
        </thead>
        <tbody>
          {inviteList.map((invite, i) => (
            <tr key={i}>
              <td>
                <Checkbox
                  checked={invite.isChecked}
                  onChange={(e) => {
                    onChangeCheckBox(e, i);
                  }}
                />
              </td>
              <td>
                <input
                  value={invite.emailId}
                  onChange={(e) => {
                    onChangeFormInput(e, i, 'emailId');
                  }}
                />
              </td>
              <td>
                <input
                  value={invite.name}
                  onChange={(e) => {
                    onChangeFormInput(e, i, 'name');
                  }}
                />
              </td>
              <td>
                <input
                  value={invite.studentNumber}
                  onChange={(e) => {
                    onChangeFormInput(e, i, 'studentNumber');
                  }}
                />
              </td>
              <td>
                <input
                  value={invite.role}
                  onChange={(e) => {
                    onChangeFormInput(e, i, 'role');
                  }}
                />
              </td>
              <td>
                <button>초대하기</button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <ButtonWrapper>
        <div>
          <TableButton $addButton onClick={addInvite}>
            행 추가
          </TableButton>
          <TableButton onClick={deleteInvite}>행 삭제</TableButton>
        </div>
        <div>
          <TableButton>
            <ExcelIcon size="15" color="#5d8c6d" /> 양식 다운로드
          </TableButton>
          <TableButton>
            <ExcelIcon size="15" color="#5d8c6d" /> 엑셀 업로드
          </TableButton>
        </div>
      </ButtonWrapper>
    </>
  );
}

export default InviteMember;
