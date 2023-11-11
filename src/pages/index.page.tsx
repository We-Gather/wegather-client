import React, { ReactElement } from 'react';

export default function Home() {
  return <div>Test.</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};
