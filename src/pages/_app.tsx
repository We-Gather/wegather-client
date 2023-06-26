import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layout/MainLayout";
import * as React from "react";
import { NextPage } from "next";

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};


export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(
      <Component {...pageProps} />
  );
}
