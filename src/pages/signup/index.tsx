import React, { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '@/components/layout/NoHeaderFooterLayout'
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';


export type signUpInfo = {
  email: string;
  password: string;
  name: string;
  school: string;
};

export default function SignUp() : JSX.Element {
  const [signUpInfo, setSignUpInfo] = useState<signUpInfo>({
    email: "",
    password: "",
    name: "",
    school: ""
  });

  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState(1);

  const [schoolEmail, setSchoolEmail] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleVerificationCodeSend = () => {
    // 이메일 인증 번호를 보내는 로직
    // ...
  };
  const checkVerificationCode = () => {
    // 인증코드 체크 함수

  };
  return (
    <div>
      {step === 1 && 
        <SignUpStep1 
          signUpInfo={signUpInfo} 
          setSignUpInfo={setSignUpInfo} 
          passwordCheck={passwordCheck} 
          setPasswordCheck={setPasswordCheck} 
          errorMessage={errorMessage} 
          setErrorMessage={setErrorMessage}
          handleNext={handleNext}   
        />}
      {step === 2 && 
        <SignUpStep2
          schoolEmail={schoolEmail}
          setSchoolEmail={setSchoolEmail}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          checkVerificationCode={checkVerificationCode}
          handleVerificationCodeSend={handleVerificationCodeSend}
          handleNext={handleNext}   
        />}
      {step === 3 && 
        <SignUpStep3/>}  
    </div>

      
  );
};

SignUp.getLayout = function getLayout(page: ReactElement){
    return <Layout>{page}</Layout>
};