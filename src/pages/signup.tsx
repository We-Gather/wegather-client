import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HorizonLine from '@/components/HorizonLine';
import LoginButton from '@/components/button/LoginButton';

const SignUpPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 40%;
  justify-content: center;
  align-items: center;
  place-content: center;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
`;
const StyledP = styled.p`
  margin-bottom: 3%;
`;
const StyledLoginInput = styled.input`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  width: 80%;
  height: 100%;
  margin-bottom: 3%;
  transition: background-color 0.2s ease-in-out;
  &:focus {
  background-color: #ffffff;
  }
`;
const RowWrapper= styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  margin: 1.5%;
  font-size: 0.75rem;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
`;

type signUpInfoType = {
  email: string;
  password: string;
  name: string;
  school: string;
};


export default function SignUpPage() {
  const [signUpInfo, setSignUpInfo] = useState<signUpInfoType>({
    email: "",
    password: "",
    name: "",
    school: "",
  });
  const [passwordCheck, setPasswordCheck] = useState('');

  return (
    <SignUpPageDiv>
      <Form>
        <h1>
          위게더 회원가입
        </h1>
        <StyledP>위게더의 회원이 되어 다양한 서비스를 경험해 보세요</StyledP>
        <HorizonLine/>
        <RowWrapper>
          <StyledP>test</StyledP>
          <StyledLoginInput type="email" 
            value={signUpInfo.email} 
            placeholder="*이메일" 
            onChange={(e) => setSignUpInfo({
              ...signUpInfo,
              email: e.target.value,
            })}
            required 
          />
        </RowWrapper>
        <RowWrapper>
        <StyledP>test</StyledP>

          <StyledLoginInput type="password" 
            value={signUpInfo.password} 
            placeholder="*비밀번호" 
            onChange={(e) => setSignUpInfo({
              ...signUpInfo,
              password: e.target.value,
            })}
            required 
          />
        </RowWrapper>
        <RowWrapper>
        <StyledP>test</StyledP>

          <StyledLoginInput type="passwordCheck" 
            value={passwordCheck} 
            placeholder="*비밀번호 확인" 
            onChange={(e) => setPasswordCheck(e.target.value)} 
            required 
          />
        </RowWrapper>
        <RowWrapper>
        <StyledP>test</StyledP>

          <StyledLoginInput type="name" 
            value={signUpInfo.password} 
            placeholder="*이름" 
            onChange={(e) => setSignUpInfo({
              ...signUpInfo,
              name: e.target.value,
            })}
            required 
          />
        </RowWrapper>
        <RowWrapper>
        <StyledP>test</StyledP>

          <StyledLoginInput type="school" 
            value={signUpInfo.password} 
            placeholder="*학교" 
            onChange={(e) => setSignUpInfo({
              ...signUpInfo,
              school: e.target.value,
            })}
            required 
          />
        </RowWrapper>
        <LoginButton text="회원가입" type="submit"/>
      </Form>
    </SignUpPageDiv>
  );
};
