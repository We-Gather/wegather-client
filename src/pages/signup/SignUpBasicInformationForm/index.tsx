import LargeSignUpButtonGreen from '@/components/button/LargeSignUpButtonGreen';
import DeleteToggleInput from '@/components/input/DeleteToggleInput';
import VisibleDeleteToggleInput from '@/components/input/VisibleDeleteToggleInput';
import {
	HorizonLineDiv,
	SignUpModal,
	SignUpSubTitle,
	SignUpTitle,
	SingupContainerDiv,
	StyledForm,
	TitleWrapper,
} from './style';
import { signUpInfoType } from '@/types/signup';
import { useState } from 'react';
import Image from 'next/image';
import ProgressModalIcon from '/public/img/first_progress_modal.svg';
import HorizonLine from '@/components/HorizonLine';
type HandleNextFunction = () => void;

export type props = {
	handleNext: HandleNextFunction;
};

export default function SignUpBasicInformationForm({
	handleNext,
}: props): JSX.Element {
  const [signUpInfo, setSignUpInfo] = useState<signUpInfoType>({
    email: "",
    password: "",
    name: "",
    school: ""
  });
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');


	const isEmailValid = (email: string): boolean => {
		const emailRegex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;
		return emailRegex.test(email);
	};
	const isPasswordValid = (password: string): boolean => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;
		return passwordRegex.test(password);
	};
	const isPasswordMatch = (password: string, passwordCheck: string): boolean => {
		return password === passwordCheck;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(signUpInfo);
		if ( true
			// isEmailValid(signUpInfo.email) &&
			// isPasswordValid(signUpInfo.password) &&
			// isPasswordMatch(signUpInfo.password, passwordCheck)
		) {
			handleNext();
		} else {
			setErrorMessage('이메일, 비밀번호를 확인해주세요');
		}
	};

	return (
		<SingupContainerDiv>
			<TitleWrapper>
				<SignUpTitle>위게더 <span>회원가입</span></SignUpTitle>
				<SignUpSubTitle>위게더의 회원이 되어 다양한 서비스를 경험해 보세요</SignUpSubTitle>
			</TitleWrapper>
			<SignUpModal>
				<Image src={ProgressModalIcon} alt='first' fill/>
			</SignUpModal>
			<HorizonLineDiv>
				<HorizonLine/>
			</HorizonLineDiv>
			<StyledForm onSubmit={handleSubmit}>
				<DeleteToggleInput
					text="이메일"
					value={signUpInfo.email}
					placeholder="이메일을 입력해주세요"
					onChange={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							email: e.target.value,
						});
					}}
					deleteInput={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							email: "",
						});
					}}
				/>
				<VisibleDeleteToggleInput
					text="비밀번호"
					value={signUpInfo.password}
					placeholder="비밀번호를 입력해주세요"
					onChange={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							password: e.target.value,
						});
					}}
					deleteInput={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							password: '',
						});
					}}
				/>
				<VisibleDeleteToggleInput
					text="비밀번호 확인"
					value={passwordCheck}
					placeholder="비밀번호를 다시 입력해주세요"
					onChange={(e: any) => {
						e.preventDefault();
						setPasswordCheck(e.target.value);
					}}
					deleteInput={(e: any) => {
						e.preventDefault();
						setPasswordCheck('');
					}}
				/>
				<DeleteToggleInput
					text="이름"
					value={signUpInfo.name}
					placeholder="이름을 입력해주세요"
					onChange={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							name: e.target.value,
						});
					}}
					deleteInput={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							name: '',
						});
					}}
				/>
				<DeleteToggleInput
					text="학교"
					value={signUpInfo.school}
					placeholder="학교를 입력해주세요"
					onChange={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							school: e.target.value,
						});
					}}
					deleteInput={(e: any) => {
						e.preventDefault();
						setSignUpInfo({
							...signUpInfo,
							school: '',
						});
					}}
				/>
				<LargeSignUpButtonGreen text="회원가입" type="submit" />
			</StyledForm>
		</SingupContainerDiv>
	);
}
