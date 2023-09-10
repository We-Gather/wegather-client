import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import {
	ErrorMessage,
	ImageWrapper,
	LoginContainerDiv,
	LoginInput,
	RowWrapper,
	StyledForm,
	StyledP,
	WegatherTextSpan,
} from './style';
import HorizonLine from '@/components/HorizonLine';
import LoginButton from '@/components/button/LoginButton';
import SocialLoginButton from '@/components/button/SocialLoginButton';
import HeaderFooterLayout from '@/components/layout/HeaderFooterLayout';
import { loginInfoType } from '@/types/login';

function validateEmail(email: string): boolean {
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	return emailRegex.test(email);
}

export default function Login(): JSX.Element {
	const [loginInfo, setLoginInfo] = useState<loginInfoType>({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			if (!validateEmail(loginInfo.email)) throw new Error();
			console.log('test');
			const response = await axios.post('/api/login', { email: loginInfo.email, password: loginInfo.password });
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
					<Image src="/wegather_logo.png" fill alt="logo" />
				</ImageWrapper>
				<StyledP>
					동아리 모집·일정·회계 관리를{' '}
					<Link href="/" style={{ textDecoration: 'none' }}>
						<WegatherTextSpan>위게더</WegatherTextSpan>
					</Link>
					로 한 번에!
				</StyledP>
				<LoginInput
					type="text"
					value={loginInfo.email}
					placeholder="이메일"
					onChange={(e: any) =>
						setLoginInfo({
							...loginInfo,
							email: e.target.value,
						})
					}
					required
				/>
				<LoginInput
					type="password"
					value={loginInfo.password}
					placeholder="비밀번호"
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
				<LoginButton text="로그인" type="submit" />
				<RowWrapper>
					<label>
						<input type="checkbox" />
						로그인 유지
					</label>
					<Link href="findpage" style={{ textDecoration: 'none', color: '#585858' }}>
						비밀번호 찾기/재설정
					</Link>
				</RowWrapper>
				<HorizonLine text="OR" />
				<SocialLoginButton text="Google" type="submit" />
				<StyledP>
					위게더가 처음이시라면?{' '}
					<Link href="/signup" style={{ textDecoration: 'none' }}>
						<WegatherTextSpan>회원가입</WegatherTextSpan>{' '}
					</Link>
				</StyledP>
			</StyledForm>
		</LoginContainerDiv>
	);
}

Login.getLayout = function getLayout(page: React.ReactElement) {
	return <HeaderFooterLayout>{page}</HeaderFooterLayout>;
};