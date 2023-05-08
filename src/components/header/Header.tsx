import Link from "next/link"
import { useRouter } from "next/router"
import React from "react";
import Image from "next/image";

import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

`;
const SytledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderButton = styled.button`
  height: 4vh;
  width: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-right: 0.5vw;
  transition: background-color 0.2s ease-in-out;
  color: #ffffff;
  background-color: #36BF7F;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

`;

export default function Header() {
  const router = useRouter();

  return (
      <StyledHeader>
        <Link href="/">
          <Image src="/Wegather_logo.png"  
                width={200} height={100}
                alt="logo"
                layout="responsive"
          />
        </Link>
        <SytledNav>
          <Link href="/login">
            <HeaderButton >
              Login
            </HeaderButton>
          </Link>
          <Link href="/signup">
            <HeaderButton >
              Signup
            </HeaderButton>
          </Link>
        </SytledNav>
      </StyledHeader>
  )
}