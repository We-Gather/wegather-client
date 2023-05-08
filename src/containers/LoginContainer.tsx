import React from "react"
import styled from "styled-components"

const ContainerDiv = styled.div`
	max-width: auto;
	height: 55vh;
	width: 23vw;
	border-radius: 0.625rem;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	background-color: #F2F2F2;;
	justify-content: center;
  	align-items: center;
  	place-content: center;
	display: flex;
  	flex-direction: column;
`;

type Props = {
	children?: React.ReactNode
}

const LoginContainer = ({ children }: Props) => {
	return (
		<ContainerDiv>
			{children}
		</ContainerDiv>
	);
}

export default LoginContainer