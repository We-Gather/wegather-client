import React, { ReactElement } from 'react';

import DefaultLayout from '@/layout/DefaultLayout';

export default function Home() {
  return <div>Test.</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
