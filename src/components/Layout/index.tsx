import Header from "./Header"
import Footer from "./Footer"
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: calc(100vh - 10rem);
`;
export default function Layout({children}:any) {
  return (
  <>
    <Header/>
    <StyledDiv>
      <main className="h-full flex items-center justify-center">
        {children}
      </main>
    </StyledDiv>
    <Footer/>
  </>
  );
}