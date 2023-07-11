import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { NextPage } from "next";
import styled, { createGlobalStyle, css, ThemeProps, ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';


interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    ${({theme}) => css`
      @media ${theme.device.tablet} {
        font-size: 7px;
      }
      @media ${theme.device.laptop} {
        font-size: 9px;
      }
      @media ${theme.device.laptopL} {
        font-size: 12px;
      }
      @media ${theme.device.desktop} {
        font-size: 16px;
      }
    `}
  }
`;

export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
