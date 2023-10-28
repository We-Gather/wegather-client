import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const SocialSubmitButton = styled.button`
  background-color: #ffffff;
  color: #000;
  width: 22.5rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: none;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  type?: 'button' | 'submit' | 'reset';
};

export default function SocialLoginButton({
  text,
  type = 'submit',
  ...rest
}: ButtonProps) {
  return (
    <SocialSubmitButton type={type} {...rest}>
      {text}
    </SocialSubmitButton>
  );
}
