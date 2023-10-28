import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
  background-color: #36bf7f;
  color: #ffffff;
  width: 22.5rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: #36bf7f;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  type?: 'button' | 'submit' | 'reset';
};

export default function LoginButton({
  text,
  type = 'submit',
  ...rest
}: ButtonProps) {
  return (
    <SubmitButton type={type} {...rest}>
      {text}
    </SubmitButton>
  );
}
