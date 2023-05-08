import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const StyledMain = styled.main `
  display: flex;
  align-items: center;
  justify-content: center;
  place-content: center;
  flex: 1;

`;
export default function Layout({children}:any) {
  return (
  <>
    <Container>
      <Header/>
      <StyledMain>
        {children}
      </StyledMain>
      <Footer/>
    </Container>
  </>
  );
}