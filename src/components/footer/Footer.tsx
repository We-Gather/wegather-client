import Link from "next/link";
import React from "react";
import Container from "../../containers/LoginContainer";
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 5vh;
  display: flex;
  flex-direction: row;
	align-items: center;

`;


export default function Footer() {
	return (
	<footer className="bg-neutral-50 border-neutral-200">
		<StyledFooter>
			<h3>
				Test Footer
			</h3>
			<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
				<div>
					Read Documentation
				</div>
				<div>
					View on GitHub
				</div>
			</div>
		</StyledFooter>
    </footer>
	);
}