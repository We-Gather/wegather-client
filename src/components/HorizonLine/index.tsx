import React from 'react';

import { HorizonLineDiv, HorizonLineSpan } from './style';

export default function HorizonLine({ text }: any) {
  if (!text) return <HorizonLineDiv />;

  return (
    <HorizonLineDiv>
      <HorizonLineSpan>{text}</HorizonLineSpan>
    </HorizonLineDiv>
  );
}
