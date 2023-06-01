import Header from "@/components/header/Header";
import Footer from "../footer/Footer";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  place-content: center;
  height: calc(100% - 160px);
`;

export default function MainLayout({ children }: any) {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledContainer>
  );
}
