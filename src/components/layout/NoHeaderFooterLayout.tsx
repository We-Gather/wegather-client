import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  height: 100vh;
  width: 100vw;
`;

export default function NoHeaderFooterLayout({ children }: any) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}
