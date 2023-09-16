import React, { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '@/components/layout/NoHeaderFooterLayout'
import SignUpBasicInformationForm from './SignUpBasicInformationForm';
import SignUpEmailVerificationForm from './SignUpEmailVerificationForm';
import SignUpCompleteForm from './SignUpCompleteForm';

export default function SignUp() : JSX.Element {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && 
        <SignUpBasicInformationForm 
          handleNext={handleNext}   
        />}
      {step === 2 && 
        <SignUpEmailVerificationForm
          handleNext={handleNext}   
        />}
      {step === 3 && 
        <SignUpCompleteForm/>}  
    </div>
  );
};

SignUp.getLayout = function getLayout(page: ReactElement){
    return <Layout>{page}</Layout>
};