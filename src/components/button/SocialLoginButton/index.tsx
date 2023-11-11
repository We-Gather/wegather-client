import { ButtonHTMLAttributes } from 'react';

import { SocialSubmitButton } from './style';

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
