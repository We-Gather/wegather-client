'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

import LoginButton from '@/components/button/LoginButton';
import SocialLoginButton from '@/components/button/SocialLoginButton';
import HorizonLine from '@/components/HorizonLine';
import DefaultLayout from '@/layout/DefaultLayout';
import { loginInfoType } from '@/types/login';

import {
  ErrorMessage,
  HorizonWrapper,
  ImageWrapper,
  LoginContainerDiv,
  LoginInput,
  RowWrapper,
  StyledForm,
  StyledP,
  UpperDescription,
  WegatherTextSpan
} from './style';

export default function Login(): JSX.Element {
  const [loginInfo, setLoginInfo] = useState<loginInfoType>({
    email: '',
    password: '',
  });
  const [errorMessage] = useState('');

  return (
    <LoginContainerDiv>
      <StyledForm>
        <ImageWrapper>
          <Image src='/Logo/wegather.svg' fill alt={''} />
        </ImageWrapper>
        <UpperDescription>
          동아리 모집·일정·회계 관리를{' '}
          <Link href='/' style={{ textDecoration: 'none' }}>
            <WegatherTextSpan>위게더</WegatherTextSpan>
          </Link>
          로 한 번에!
        </UpperDescription>
        <LoginInput
          type='text'
          value={loginInfo.email}
          placeholder='이메일'
          onChange={(e: any) =>
            setLoginInfo({
              ...loginInfo,
              email: e.target.value,
            })
          }
          required
        />
        <LoginInput
          type='password'
          value={loginInfo.password}
          placeholder='비밀번호'
          onChange={(e: any) =>
            setLoginInfo({
              ...loginInfo,
              password: e.target.value,
            })
          }
          required
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {!errorMessage && <ErrorMessage>&nbsp;</ErrorMessage>}
        <LoginButton text='로그인' type='submit' />
        <RowWrapper>
          <label>
            <input type='checkbox' />
            로그인 유지
          </label>
          <Link
            href='findpage'
            style={{ textDecoration: 'none', color: '#585858' }}
          >
            비밀번호 찾기/재설정
          </Link>
        </RowWrapper>
        <HorizonWrapper>
          <HorizonLine text='OR' />
        </HorizonWrapper>
        <SocialLoginButton text='Google' type='submit' />
        <StyledP>
          위게더가 처음이시라면?{' '}
          <Link href='/signup' style={{ textDecoration: 'none' }}>
            <WegatherTextSpan>회원가입</WegatherTextSpan>{' '}
          </Link>
        </StyledP>
      </StyledForm>
    </LoginContainerDiv>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
