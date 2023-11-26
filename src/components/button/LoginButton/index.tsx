import { ButtonHTMLAttributes } from 'react';

import { SubmitButton } from './style';

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
