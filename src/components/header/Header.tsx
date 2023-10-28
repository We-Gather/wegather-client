import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 4.5rem;
  flex-shrink: 0;
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
  width: 5.625rem;
  height: 2.1875rem;
  flex-shrink: 0;
  display: flex;
  margin: 0.25rem;

  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: #ffffff;
  background-color: #36bf7f;
  border: #36bf7f;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
const ImageWrapper = styled.div`
  width: 7.5rem;
  height: 2.11638rem;
  position: relative;
  margin: 0.5rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <MaxWidthDiv>
        <SytledDiv>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <ImageWrapper>
              <Image src='/wegather_logo.png' fill alt='logo' />
            </ImageWrapper>
          </Link>
        </SytledDiv>

        <SytledDiv>
          <Link href='/login' style={{ textDecoration: 'none' }}>
            <HeaderButton>Login</HeaderButton>
          </Link>
          <Link href='/signup' style={{ textDecoration: 'none' }}>
            <HeaderButton>Signup</HeaderButton>
          </Link>
        </SytledDiv>
      </MaxWidthDiv>
    </StyledHeader>
  );
}
