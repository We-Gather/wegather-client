import Link from "next/link";
import React from "react";
import Container from "../Container";
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
	align-items: center;

`;


export default function Footer() {
	return (
	<footer className="bg-neutral-50 border-neutral-200">
		<Container>
			<StyledFooter>
				<h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:mb-0 lg:pr-4 lg:w-1/2">
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
		</Container>
    </footer>
	);
}