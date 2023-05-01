import Link from "next/link"
import { useRouter } from "next/router"
import React from "react";
import Image from "next/image";

import styled from 'styled-components';

const SytledHeader = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
	align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

`;
const SytledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 16rem;
  gap: 0.5rem;
`;

const HeaderButton = styled.button`
  width: 6.25rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 0.75rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  color:#2f2f2f;
  background-color: #36BF7F;
  font-weight: bold;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

`;

export default function Header() {
  const router = useRouter();

  return (
    <header className="text-gray-600 body-font">
      <SytledHeader>
        <Link href="/" className="m-[16rem]">
          <Image src="/Wegather_logo.png"  
                width={200} height={100}
                alt="logo" 
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
      </SytledHeader>
    </header>
  )
}