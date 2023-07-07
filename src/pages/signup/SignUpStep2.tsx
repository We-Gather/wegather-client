import SignUpButton from "@/components/button/SignUpButton";
import DeleteToggleInput from "@/components/input/DeleteToggleInput";
import VisibleDeleteToggleInput from "@/components/input/VisibleDeleteToggleInput";
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


const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
`;

const SignUpWrapper = styled.div`
  display: flex;
  width: 41.4375rem;
  height: 3.125rem;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.15rem;
`;
const SignUpP = styled.p`
  color: #303030;
  font-size: 1rem;
`;

const SignUpInput = styled.input`
  display: flex;
  width: 25.625rem;
  height: 3.125rem;
  flex-shrink: 0;
  align-items: flex-start;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #9C9C9C;
  background: #FFF;

  transition: background-color 0.2s ease-in-out;
`;
const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const EmailButton = styled.button`
  width: 7.8125rem;
  height: 3.125rem;
  flex-shrink: 0;
  border-radius: 10px;
  background: #303030;
  color: #FFF;
`;

export type props = {
  schoolEmail: string;
  setSchoolEmail: React.Dispatch<React.SetStateAction<string>>
  verificationCode: string;
  setVerificationCode: React.Dispatch<React.SetStateAction<string>>
  checkVerificationCode: any;
  handleVerificationCodeSend: any;
  handleNext: any;
}
export default function SignUpStep2({schoolEmail, setSchoolEmail,verificationCode, setVerificationCode,  checkVerificationCode, handleVerificationCodeSend, handleNext}: props) : JSX.Element {

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNext();
  };

  return (
    <SingupContainerDiv>
      <SignUpTitle>학교 인증</SignUpTitle>
      <SignUpSubTitle>
        이 단계는 건너뛸 수 있어요
      </SignUpSubTitle>
      <SignUpModal>모달2</SignUpModal>
      <HorizonLineDiv/>
      <StyledForm  onSubmit={handleSubmit}>
        <SignUpWrapper>
          <SignUpP>학교 웹메일</SignUpP>
          <EmailInputContainer>
            <SignUpInput 
              type="text"
              value={schoolEmail}
              placeholder="학교 이메일을 입력해주세요."
              onChange={(e:any) => {setSchoolEmail(e.target.value)}}
              required 
            />
            <EmailButton onClick={(e:any) => {
              e.preventDefault();
              setIsSubmitClicked(true);
              handleVerificationCodeSend();
            }}>
              인증번호 전송
            </EmailButton>
          </EmailInputContainer>
        </SignUpWrapper>
        <SignUpWrapper>
          {isSubmitClicked ? 
          <>
            <SignUpP>학교 웹메일</SignUpP><EmailInputContainer>
              <SignUpInput
                type="text"
                value={verificationCode}
                placeholder="인증번호를 입력해주세요."
                onChange={(e: any) => { setVerificationCode(e.target.value); } }
                required />
              <EmailButton onClick={checkVerificationCode}>
                인증번호 확인
              </EmailButton>
            </EmailInputContainer>
          </>
          :<></>}
        </SignUpWrapper>
        <SignUpButton text="회원가입" type="submit" />
      </StyledForm>
    </SingupContainerDiv>

  );
};