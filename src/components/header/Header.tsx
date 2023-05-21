import Link from "next/link"
import { useRouter } from "next/router"
import React from "react";
import Image from "next/image";
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
	align-items: center;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2);

`;

const MaxWidthDiv = styled.div`
  max-width: 1440px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SytledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  place-content: center;
  align-items: center;
`;

const HeaderButton = styled.button`
  height: 40px;
  width: 100px;
  display: flex;
  margin: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: #ffffff;
  background-color: #36BF7F;
  border: #36BF7F;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

`;

export default function Header() {

  return (
      <StyledHeader>
        <MaxWidthDiv>
            <SytledDiv>
              <Link href="/">
                <Image src="/Wegather_logo.png"  
                      width={120} height={60}
                      alt="logo"
                />
            </Link>
          </SytledDiv>
          
          <SytledDiv>
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
          </SytledDiv>
        </MaxWidthDiv>
      </StyledHeader>
  )
}