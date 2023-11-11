import Head from 'next/head';
import React from 'react';

export default function Seo({ title }: any) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
