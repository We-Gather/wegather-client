import React from 'react';

import {
  Category,
  ClubCategories,
  ClubType,
  Container,
  Seperator
} from './style';

function ClubInfoHeader({
  clubType,
  categories,
}: {
  clubType: string;
  categories: string[];
}) {
  return (
    <Container>
      <ClubType>{clubType}</ClubType>
      <ClubCategories>
        {categories.map((cat, i) => (
          <>
            <Category key={i}>{cat}</Category>
            <Seperator size='15' />
          </>
        ))}
      </ClubCategories>
    </Container>
  );
}

export default ClubInfoHeader;
