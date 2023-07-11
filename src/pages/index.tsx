import { Inter } from "next/font/google";
import React, { ReactElement } from "react";
import HeaderFooterLayout from "@/components/layout/HeaderFooterLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>Test.</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}