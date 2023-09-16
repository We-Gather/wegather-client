import { HorizonLineDiv, SignUpModal, SignUpSubTitle, SignUpTitle, SingupContainerDiv } from './style';

export default function SignUpCompleteForm(): JSX.Element {
	return (
		<SingupContainerDiv>
			<SignUpTitle>회원가입 완료</SignUpTitle>
			<SignUpSubTitle>위게더의 회원이 되신것을 환영합니다!</SignUpSubTitle>
			<SignUpModal>모달2</SignUpModal>
			<HorizonLineDiv />
			<div>일러스트 이미지</div>
		</SingupContainerDiv>
	);
}
