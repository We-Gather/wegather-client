import { HorizonLineDiv, SignUpModal, SignUpSubTitle, SignUpTitle, SingupContainerDiv, TitleWrapper } from './style';
import ProgressModalIcon from '/public/img/last_progress_modal.svg';
import HorizonLine from '@/components/HorizonLine';
import Image from 'next/image';

export default function SignUpCompleteForm(): JSX.Element {
	return (
		<SingupContainerDiv>
      <TitleWrapper>
        <SignUpTitle>회원가입 완료</SignUpTitle>
        <SignUpSubTitle>위게더의 회원이 되신것을 환영합니다!</SignUpSubTitle>
      </TitleWrapper>
			<SignUpModal>
				<Image src={ProgressModalIcon} alt="last" fill />
			</SignUpModal>
			<HorizonLineDiv>
				<HorizonLine />
			</HorizonLineDiv>
			<div>일러스트 이미지</div>
		</SingupContainerDiv>
	);
}
