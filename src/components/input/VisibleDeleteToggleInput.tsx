import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import styled from "styled-components";

const SignUpWrapper = styled.div`
  display: flex;
  width: 41.4375rem;
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
  width: 33.75rem;
  height: 3.125rem;
  align-items: flex-start;
  flex-shrink: 0;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #9C9C9C;
  background: #FFF;

  transition: background-color 0.2s ease-in-out;
`;

const PasswordInputContainer = styled.div`
  position: relative;
`;


const VisibleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 3.25rem;
  transform: translateY(-50%);
  cursor: pointer;
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1.15rem;
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
          {visibleInput ? 'Hide' : 'Show'}
        </VisibleButton>
        <DeleteButton onClick={deleteInput}>
          X
        </DeleteButton>
      </PasswordInputContainer>
    </SignUpWrapper>
  );
}