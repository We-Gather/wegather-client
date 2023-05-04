import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SignUpPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 47rem;
  width: 48.75rem;
  justify-content: center;
  align-items: center;
  place-content: center;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: #F2F2F2;;
`;

export default function SignUpPage() {
  return (
    <SignUpPageDiv>
      <h1>
        위게더 회원가입
      </h1>
      <form>
        <div>
          이메일
        </div>
        <div>
          비밀번호
        </div>
        <div>
          비밀번호 재입력
        </div>
        <div>
          이름
        </div>
        <div>
          학교
        </div>
      </form>
    </SignUpPageDiv>
  );
};
