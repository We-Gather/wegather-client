import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import HorizonLine from '@/components/HorizonLine';
import LoginContainer from '@/containers/LoginContainer';
import LoginButton from '@/components/button/LoginButton';
import GoogleLoginButton from '@/components/button/GoogleLoginButton';
import LoginInput from '@/components/input/LoginInput';


const WegatherTextSpan = styled.span`
  color: #36BF7F;
`;
const StyledP = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
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

const RowWrapper= styled.div`
  width: 80%;
  display: flex;
  margin: 3%;
  font-size: 0.75rem;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
`;

const ErrorMessage = styled.span`
  color: red;  
  width: 80%;
  margin-bottom: 3%;
  text-align: left;;
  font-size: 0.6rem;
`;


export default function Login() : JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <LoginContainer>
        <Form onSubmit={handleSubmit}>
        <Image src="/Wegather_logo.png"  
          width={200} height={200}
          alt="logo" 
        />
        <StyledP>동아리 모집·일정·회계 관리를 <Link href="/"><WegatherTextSpan>위게더</WegatherTextSpan></Link>로 한 번에!</StyledP>
        <LoginInput type="text"
          value={email} placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
          required />
        <LoginInput type="password" 
          value={password} 
          placeholder="비밀번호" 
          onChange={(e) => setPassword(e.target.value)} 
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
      </Form>

    </LoginContainer>
  );
};