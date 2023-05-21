import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import HorizonLine from '@/components/HorizonLine';
import LoginButton from '@/components/button/LoginButton';
import GoogleLoginButton from '@/components/button/GoogleLoginButton';
<<<<<<< HEAD

const LoginContainerDiv = styled.div`
	max-width: 440px;
  max-height: 590px;
  
=======
// import LoginInput from '@/components/input/LoginInput';

const LoginContainerDiv = styled.div`
	max-width: auto;
>>>>>>> d58bea8 (chore:빌드,패키지 설치)
	height: 55vh;
	width: 23vw;
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
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
`;

const RowWrapper= styled.div`
  width: 80%;
  display: flex;
<<<<<<< HEAD
  margin: 8px;
=======
  margin: 3%;
>>>>>>> d58bea8 (chore:빌드,패키지 설치)
  font-size: 0.75rem;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
`;

const ErrorMessage = styled.span`
  color: red;  
  width: 80%;
<<<<<<< HEAD
  margin-bottom: 8px;
=======
  margin-bottom: 3%;
>>>>>>> d58bea8 (chore:빌드,패키지 설치)
  text-align: left;;
  font-size: 0.6rem;
`;

const LoginInput = styled.input`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  width: 80%;
<<<<<<< HEAD
  height: 2.5rem;
  margin-bottom: 8px;
=======
  height: 8%;
  margin-bottom: 3%;
>>>>>>> d58bea8 (chore:빌드,패키지 설치)
  transition: background-color 0.2s ease-in-out;
  &:focus {
  background-color: #ffffff;
  }
`;

<<<<<<< HEAD
export type loginInfoType = {
  email: string;
  password: string;
};

export default function Login() : JSX.Element {
  const [loginInfo, setLoginInfo] = useState<loginInfoType>({
    email: "",
    password: "",
  });
=======
export default function Login() : JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> d58bea8 (chore:빌드,패키지 설치)
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('이메일, 비밀번호를 확인해주세요');

    // try {
    //   const response = await axios.post<LoginResponse>('/api/login', { email, password });
    //   const token = response.data.token;
    // } catch (error) {
    //   console.error(error);
    //   setErrorMessage('로그인에 실패했습니다.');
    // }
  };

  return (
    <LoginContainerDiv>
<<<<<<< HEAD
      <StyledForm onSubmit={handleSubmit}>
=======
        <StyledForm onSubmit={handleSubmit}>
>>>>>>> d58bea8 (chore:빌드,패키지 설치)
        <Image src="/Wegather_logo.png"  
          width={200} height={100}
          alt="logo" 
        />
        <StyledP>동아리 모집·일정·회계 관리를 <Link href="/"><WegatherTextSpan>위게더</WegatherTextSpan></Link>로 한 번에!</StyledP>
        <LoginInput type="text"
<<<<<<< HEAD
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
=======
          value={email} placeholder="이메일"
          onChange={(e:any) => setEmail(e.target.value)}
          required />
        <LoginInput type="password" 
          value={password} 
          placeholder="비밀번호" 
          onChange={(e:any) => setPassword(e.target.value)} 
>>>>>>> d58bea8 (chore:빌드,패키지 설치)
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
          <Link href="findpage">
            비밀번호 찾기/재설정
          </Link>
        </RowWrapper>
        <HorizonLine text="OR"/>
        <GoogleLoginButton text="Google" type="submit"/>
        <StyledP>
          위게더가 처음이시라면? <Link href="/signup"><WegatherTextSpan>회원가입</WegatherTextSpan> </Link>
        </StyledP>
      </StyledForm>
    </LoginContainerDiv>
  );
};