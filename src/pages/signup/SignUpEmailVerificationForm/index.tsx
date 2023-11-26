import LargeSignUpButtonGreen from '@/components/button/LargeSignUpButtonGreen';
import { useState } from 'react';
import RegularSignUpButtonGreen from '@/components/button/RegularSignUpButtonGreen';
import RegularSignUpButtonGray from '@/components/button/RegularSignUpButtonGray';
import { StyledForm } from '@/styles/login/style';
import Image from 'next/image';
import HorizonLine from '@/components/HorizonLine';
import ProgressModalIcon from '/public/img/second_progress_modal.svg';
import {
	SignUpWrapper,
	SignUpP,
	EmailInputContainer,
	SignUpInput,
	EmailButton,
	NextButtonWrapper,
	SingupContainerDiv,
	HorizonLineDiv,
	SignUpModal,
	SignUpSubTitle,
	SignUpTitle,
	TitleWrapper,
	PrevButton,
} from './style';

export type props = {
	handleNext: any;
	handlePrev: any;
};
export default function SignUpEmailVerificationForm({ handleNext, handlePrev }: props): JSX.Element {
	const [schoolEmail, setSchoolEmail] = useState<string>('');
	const [verificationCode, setVerificationCode] = useState('');

	const [isSubmitClicked, setIsSubmitClicked] = useState(false);

	const handleVerificationCodeSend = () => {
		// 이메일 인증 번호를 보내는 로직
		// ...
	};
	const checkVerificationCode = () => {
		// 인증코드 체크 함수
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleNext();
	};

	return (
		<SingupContainerDiv>
			<TitleWrapper>
				<SignUpTitle>학교 인증</SignUpTitle>
				<SignUpSubTitle>이 단계는 건너뛸 수 있어요</SignUpSubTitle>
			</TitleWrapper>
			<SignUpModal>
				<Image src={ProgressModalIcon} alt="second" fill />
			</SignUpModal>
			<HorizonLineDiv>
				<HorizonLine />
			</HorizonLineDiv>
			<StyledForm onSubmit={handleSubmit}>
				<SignUpWrapper>
					<SignUpP>학교 웹메일</SignUpP>
					<EmailInputContainer>
						<SignUpInput
							type="text"
							value={schoolEmail}
							placeholder="학교 이메일을 입력해주세요."
							onChange={(e: any) => {
								setSchoolEmail(e.target.value);
							}}
							required
						/>
						<EmailButton
							onClick={(e: any) => {
								e.preventDefault();
								setIsSubmitClicked(true);
								handleVerificationCodeSend();
							}}
						>
							인증번호 전송
						</EmailButton>
					</EmailInputContainer>
				</SignUpWrapper>
				<SignUpWrapper>
					{isSubmitClicked ? (
						<>
							<SignUpP>학교 웹메일</SignUpP>
							<EmailInputContainer>
								<SignUpInput
									type="text"
									value={verificationCode}
									placeholder="인증번호를 입력해주세요."
									onChange={(e: any) => {
										setVerificationCode(e.target.value);
									}}
									required
								/>
								<EmailButton onClick={checkVerificationCode}>인증번호 확인</EmailButton>
							</EmailInputContainer>
						</>
					) : (
						<></>
					)}
				</SignUpWrapper>
				<NextButtonWrapper>
					<RegularSignUpButtonGray text="건너뛰기" type="submit" />
					<RegularSignUpButtonGreen text="회원가입" type="submit" />
				</NextButtonWrapper>
			</StyledForm>
			<PrevButton onClick={handlePrev}>이전</PrevButton>
		</SingupContainerDiv>
	);
}
