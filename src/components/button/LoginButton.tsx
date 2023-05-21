import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  background-color: #36BF7F;
  color: #ffffff;
  width: 80%;
  height: 10%;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: #36BF7F;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	type?: "button" | "submit" | "reset";
};

export default function LoginButton({text, type = "submit", ...rest}: ButtonProps) {
	return (
		<SubmitButton type={type} {...rest} >
			{text}
		</SubmitButton>

	);
}