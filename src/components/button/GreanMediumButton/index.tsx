import React from 'react';

import { StyledButton } from './style';

type ButtonProps = {
  background: string;
  text: string;
  textcolor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function GreenMediumButton({
  background,
  text,
  textcolor,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type='button'
      backgroundColor={background}
      textColor={textcolor}
      onClick={onClick}>
      {text}
    </StyledButton>
  );
}
