import React from 'react';

import { StyledButton } from './style';

type ButtonProps = {
	backgroundColor: string;
	text: string;
	textColor: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function GreenMediumButton({ backgroundColor, text, textColor, onClick }: ButtonProps) {
  return (
    <StyledButton type="button" backgroundColor={backgroundColor} textColor={textColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
