import { useState } from "react";
import styled from "styled-components";

const SingupContainerDiv = styled.div`
  width: 48.75rem;
  height: 34.375rem;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  place-content: center;
	display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #C9C9C9;
  background: #FFF;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);
`;
const SignUpTitle = styled.p`
  color: #36BF7F;
  font-size: 2rem;
`;
const SignUpSubTitle = styled.p`
  color: #303030;
  font-size: 0.875rem;
`
const SignUpModal =  styled.div`
  display: flex;
  width: 11.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const HorizonLineDiv = styled.div`
  width: 43.75rem;
	margin-bottom: 1rem;
	text-align: center;
	line-height: 0.1rem;
	border-bottom: 0.1rem solid #aaa;
`;



export default function SignUpCompleteForm() : JSX.Element {

  return (
    <SingupContainerDiv>
      <SignUpTitle>회원가입 완료</SignUpTitle>
      <SignUpSubTitle>
        위게더의 회원이 되신것을 환영합니다!
      </SignUpSubTitle>
      <SignUpModal>모달2</SignUpModal>
      <HorizonLineDiv/>
      <div>
        일러스트 이미지
      </div>
    </SingupContainerDiv>

  );
};