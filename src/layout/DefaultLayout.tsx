'use client';
import React from 'react';

// import Footer from '@/components/footer/Footer';
// import TopNav from '@/components/header/TopNav';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <TopNav /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
