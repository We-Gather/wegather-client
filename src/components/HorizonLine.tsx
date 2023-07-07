import React from "react"
import styled from "styled-components";

const HorizonLineDiv = styled.div`
	width: 22.5rem;
	margin-bottom: 0.75rem;
	text-align: center;
	line-height: 0.1rem;
	border-bottom: 0.1rem solid #aaa;
`;

const HorizonLineSpan = styled.span`
	background-color: #F2F2F2;
	font-size: 0.75rem;
	padding: 0.5rem;
`;


export default function HorizonLine({text} : any) {
	if (!text) return (
		<HorizonLineDiv/>
	); 

	return (
		<HorizonLineDiv>
			<HorizonLineSpan>
				{text}
			</HorizonLineSpan>
		</HorizonLineDiv>
	);
}