import LargeSignUpButtonGreen from "@/components/button/LargeSignUpButtonGreen";
import DeleteToggleInput from "@/components/input/DeleteToggleInput";
import VisibleDeleteToggleInput from "@/components/input/VisibleDeleteToggleInput";

import styled from "styled-components";

const SingupContainerDiv = styled.div`
  width: 48.75rem;
  height: 47rem;
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

export type signUpInfo = {
  email: string;
  password: string;
  name: string;
  school: string;
};

type HandleNextFunction = () => void;

export type props = {
  signUpInfo: signUpInfo;
  setSignUpInfo: React.Dispatch<React.SetStateAction<signUpInfo>>
  passwordCheck: string;
  setPasswordCheck: React.Dispatch<React.SetStateAction<string>>
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  handleNext: HandleNextFunction;
}

export default function SignUpBasicInformationForm({signUpInfo, setSignUpInfo, passwordCheck, setPasswordCheck, errorMessage, setErrorMessage, handleNext}: props) : JSX.Element {

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

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmailValid(signUpInfo.email)
    && isPasswordValid(signUpInfo.password)
    && isPasswordMatch(signUpInfo.password, passwordCheck)){
      handleNext();
    }
    else {
      setErrorMessage('이메일, 비밀번호를 확인해주세요');
    }
  };

  return (
    <SingupContainerDiv>
    <SignUpTitle>회원가입</SignUpTitle>
    <SignUpSubTitle>
      위게더의 회원이 되어 다양한 서비스를 경험해 보세요
    </SignUpSubTitle>
    <SignUpModal>모달</SignUpModal>
    <HorizonLineDiv/>
      <StyledForm  onSubmit={handleSubmit}>
        <DeleteToggleInput 
          text="이메일"
          value={signUpInfo.email}
          placeholder="이메일을 입력해주세요"
          onChange={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            email: e.target.value,
          })}}
          deleteInput={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            email: "",
          })}}
          />
        <VisibleDeleteToggleInput
          text="비밀번호"
          value={signUpInfo.password}
          placeholder="비밀번호를 입력해주세요"
          onChange={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            password: e.target.value,
          })}}
          deleteInput={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            password: "",
          })}}
          />
        <VisibleDeleteToggleInput 
          text="비밀번호 확인"
          value={passwordCheck}
          placeholder="비밀번호를 다시 입력해주세요"
          onChange={(e:any) => {
            e.preventDefault();
            setPasswordCheck(e.target.value)
          }}
          deleteInput={(e:any) => {
            e.preventDefault();
            setPasswordCheck("")
          }}
        />
        <DeleteToggleInput 
          text="이름"
          value={signUpInfo.name}
          placeholder="이름을 입력해주세요"
          onChange={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            name: e.target.value,
          })}}
          deleteInput={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            name: "",
          })}}
        />
        <DeleteToggleInput 
          text="학교"
          value={signUpInfo.school}
          placeholder="학교를 입력해주세요"
          onChange={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            school: e.target.value,
          })}}
          deleteInput={(e:any) => {
            e.preventDefault();
            setSignUpInfo({
            ...signUpInfo,
            school: "",
          })}}
          />
        <LargeSignUpButtonGreen text="회원가입" type="submit" />
      </StyledForm>
      </SingupContainerDiv>

  );
};