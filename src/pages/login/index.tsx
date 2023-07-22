import * as React from "react";
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import HorizonLine from '@/components/HorizonLine';
import LoginButton from '@/components/button/LoginButton';
import SocialLoginButton from '@/components/button/SocialLoginButton';
import HeaderFooterLayout from "@/components/layout/HeaderFooterLayout";

const LoginContainerDiv = styled.div`
  width: 27.5rem;
  height: 36.875rem;
	border-radius: 0.625rem;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	background-color: #F2F2F2;;
	justify-content: center;
  align-items: center;
  place-content: center;
	display: flex;
  flex-direction: column;
`;

const WegatherTextSpan = styled.span`
  color: #36BF7F;
`;

const StyledP = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
`;

const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
`;

const RowWrapper= styled.div`
  width: 22.5rem;
  display: flex;
  margin: 0.5rem;
  font-size: 0.75rem;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
`;

const ErrorMessage = styled.span`
  color: red;  
  width: 22.5rem;
  margin-bottom: 0.5rem;
  text-align: left;;
  font-size: 0.6rem;
`;

const LoginInput = styled.input`
  display: flex;
  width: 22.5rem;
  height: 2.5rem;
  align-items: center;
  flex-shrink: 0;
  
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  &:focus {
  background-color: #ffffff;
  }

`;

const ImageWrapper = styled.div`
  width: 11.25rem;
  height: 3.17456rem;
  position: relative;
`;
function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}
export type loginInfoType = {
  email: string;
  password: string;
};

export default function Login() : JSX.Element {
  const [loginInfo, setLoginInfo] = useState<loginInfoType>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    try {
      if (!validateEmail(loginInfo.email))
        throw new Error();
      console.log("test");
      const response = await axios.post('/api/login', 
        { email:loginInfo.email, password:loginInfo.password});
      const token = response.data.token;
      console.log(token);
    } catch (error) {
      console.error(error);
      setErrorMessage('이메일과 비밀번호를 확인해주세요.');
    }
  };

  return (
    <LoginContainerDiv>
      <StyledForm onSubmit={handleSubmit}>
        <ImageWrapper>
          <Image src="/wegather_logo.png"  
            fill alt="logo" 
          />
        </ImageWrapper>
        <StyledP>동아리 모집·일정·회계 관리를 <Link href="/" style={{textDecoration: 'none'}}><WegatherTextSpan>위게더</WegatherTextSpan></Link>로 한 번에!</StyledP>
        <LoginInput type="text"
          value={loginInfo.email} placeholder="이메일"
          onChange={(e:any) => setLoginInfo({
            ...loginInfo,
            email: e.target.value,
          })}
          required />
        <LoginInput type="password" 
          value={loginInfo.password} 
          placeholder="비밀번호" 
          onChange={(e:any) => setLoginInfo({
            ...loginInfo,
            password: e.target.value,
          })}
          required 
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {!errorMessage && <ErrorMessage>&nbsp;</ErrorMessage>}
        <LoginButton text="로그인" type="submit" />
        <RowWrapper>
          <label>
            <input type="checkbox"/>
            로그인 유지
          </label>
          <Link href="findpage" style={{textDecoration: 'none', color: '#585858'}}>
            비밀번호 찾기/재설정
          </Link>
        </RowWrapper>
        <HorizonLine text="OR"/>
        <SocialLoginButton text="Google" type="submit"/>
        <StyledP>
          위게더가 처음이시라면? <Link href="/signup" style={{textDecoration: 'none'}}><WegatherTextSpan>회원가입</WegatherTextSpan> </Link>
        </StyledP>
      </StyledForm>
    </LoginContainerDiv>
  );
};
Login.getLayout = function getLayout(page: React.ReactElement)
{
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>;
};