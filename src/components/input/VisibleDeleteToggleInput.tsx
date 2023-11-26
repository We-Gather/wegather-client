import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import styled from "styled-components";
import Image from 'next/image'
import visible_icon from "/public/img/visible_icon.svg"
import x_icon from "/public/img/x_icon.svg";

const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SignUpP = styled.p`
  color: #303030;
  font-size: 1rem;
`;

const SignUpInput = styled.input`
  display: flex;
  width: 33.75rem;
  height: 3.125rem;
  align-items: flex-start;
  flex-shrink: 0;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #9C9C9C;
  background: #FFF;
  color:#000;
  transition: background-color 0.2s ease-in-out;
`;

const PasswordInputContainer = styled.div`
  position: relative;
`;


const VisibleButton = styled.button`
  position: absolute;
  width: 1.875rem;
  height: 1.875rem;
  top: 50%;
  right: 3.25rem;
  background-color: #FFF;
  border: none;
  transform: translateY(-50%);
  cursor: pointer;
`;
const DeleteButton = styled.button`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  top: 50%;
  right: 1.15rem;
  border: none;
  border-radius: 5rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

 export type props = {
  text: string;
  value: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  deleteInput?: MouseEventHandler<HTMLButtonElement> | undefined
};

export default function VisibleDeleteToggleInput ({text, value, placeholder, onChange, deleteInput}: props) {
  const [visibleInput, setVisibleInput] = useState<boolean>(false);
  
  const setVisibility = (event: React.MouseEvent) => {
    event.preventDefault();
    setVisibleInput(!visibleInput);
  };

  return (
    <SignUpWrapper>
      <SignUpP>{text}</SignUpP>
      <PasswordInputContainer>
        <SignUpInput 
          type={visibleInput ? "text" : "password"}
          value={value} 
          placeholder={placeholder}
          onChange={onChange}
          required 
        />
        <VisibleButton onClick={setVisibility}>
          <Image src={visible_icon} alt="" fill	/>
        </VisibleButton>
        <DeleteButton onClick={deleteInput}>
          <Image src={x_icon} alt="delete" fill/>
        </DeleteButton>
      </PasswordInputContainer>
    </SignUpWrapper>
  );
}