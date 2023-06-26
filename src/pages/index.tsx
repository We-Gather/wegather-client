import { Inter } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Layout from "@/components/layout/MainLayout";

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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>Test.</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}