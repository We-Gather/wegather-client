import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import HorizonLine from '@/components/HorizonLine';

const LoginPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 37rem;
  width: 27.5rem;
  justify-content: center;
  align-items: center;
  place-content: center;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: #F2F2F2;;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;;
`;

const LoginInputBoxRabel = styled.label`
  margin: 0.5rem;
`;

const LoginInputBox = styled.input`
  border: 1px solid #e5e7eb;
  border-radius: 0.625rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 22.5rem;
  height: 2.5rem;
  transition: background-color 0.2s ease-in-out;

  &:focus {
  background-color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  background-color: #36BF7F;
  color: #ffffff;
  width: 22.5rem;
  height: 3.75rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.675rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const RowWrapper= styled.div`
  width: 22.5rem;
  display: flex;
  font-size: 0.75rem;
  padding: 0.25rem;
  margin: 0.5rem;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
`;

const ErrorMessage = styled.span`
  color: red;  
  padding: 0.25rem 0.5rem;
  width: 22.5rem;
  text-align: left;;
  margin-right: auto;
  font-size: 0.8rem;
`;

const LoginCheckBox = styled.input`
  
`;

type LoginResponse = {
  token: string;
};

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
    <LoginPageDiv>
      <Form onSubmit={handleSubmit}>
        <Image src="/Wegather_logo.png"  
            width={200} height={200}
            alt="logo" 
            />
        <h4>동아리 모집·일정·회계 관리를 위게더로 한 번에!</h4>
        <LoginInputBoxRabel>
          <LoginInputBox type="text"
            value={email} placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
            required />
          <LoginInputBox type="password" 
            value={password} 
            placeholder="비밀번호" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </LoginInputBoxRabel>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SubmitButton type="submit" >Sign In</SubmitButton>
        <RowWrapper>
          <label>
            <input type="checkbox"/>
            로그인 유지
          </label>
          <Link href="findpage">
            아이디/비밀번호 찾기
          </Link>
        </RowWrapper>
      </Form>
      <HorizonLine text="OR"/>
      <SubmitButton>Google Login</SubmitButton>
      <RowWrapper>
        <p>
          위게더가 처음이시라면?
        </p>
        <Link href="signup">
          회원가입
        </Link>
      </RowWrapper>
    </LoginPageDiv>
  );
};